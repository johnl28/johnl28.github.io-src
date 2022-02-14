var MarkdownIt = require('markdown-it');
import constants from '../script/constants.js'

let ARTICLES_TABLE = null;

export default class {
  async FetchArticlesTable()
  {
    let seed = constants.development ? Math.random(): constants.version;
    if (!ARTICLES_TABLE)
    {
      let response = await fetch(`/${constants.root_dir}/${constants.articles_table}?seed=${seed}`);
      ARTICLES_TABLE = await response.json();
    }

    return ARTICLES_TABLE;
  }

  async GetArticleTable(id)
  {
    let articlesTable = await this.FetchArticlesTable();
    return articlesTable[id];
  }

  MarkDownToHTML(text)
  {
    let markDownit = new MarkdownIt();
    return markDownit.render(text);
  }

  async FetchMarkDownFile(fileName) 
  {
    const file = await fetch(fileName);
    const text = await file.text();
    return this.MarkDownToHTML(text);
  }

  async GetArticleHTMLContent(id) 
  {
    let article = await this.GetArticleTable(id);
    if (!article)
      return "";

    return this.FetchMarkDownFile(`${constants.root_dir}/${article.content}`);
  }

}


