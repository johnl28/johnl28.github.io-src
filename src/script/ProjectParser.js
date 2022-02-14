var MarkdownIt = require('markdown-it');
let constants = require('./constants');
// let projectsDict = {}


export async function GetProject(id)
{
  let seed = constants.development ? Math.random(): constants.version;
  let res = await fetch(`/${root_dir}/${projects_table}?seed=${seed}`);
  let projects = await res.json();

  for(let i in projects)
  {
    if (projects[i].id == id) {
      return projects[i];
    }
  }

  return null;
}

export function MarkDownToHTML(text)
{
  let markDownit = new MarkdownIt();
  return markDownit.render(text);
}

export async function ReadMarkDownFile(file) 
{
  const file = await fetch(file);
  const text = await file.text();
  return MarkDownToHTML(text);
}

export async function GetProjectContent(id) 
{
  let project = await GetProject(id);
  if (!project)
    return "";

  return MarkDownToHTML(project.content);
}
