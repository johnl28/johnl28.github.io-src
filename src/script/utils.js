


const inlineTags = {
  "##": "<h2>{0}</h2>",
  "#": "<h1>{0}</h1>",
  "!":  "<b>{0}</b><br />",
  "[img]": "<a href='{2}' style='width: {0}; height: {1}; cursor: zoom-in;' target='_blank'><img alt='Not found' style='width: 100%; height: 100%; object-fit: scale-down;' src='{2}' /></a>",
  "[p]": "<p>{0}</p>",
  "[url]": "<a href='{1}' target='_blank'>{0}</a>",
  "[yt]": "<iframe width='100%' height='315' style='margin-block: 10px;' src='{0}' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
  "---": "<hr />",
  "[/]": "<br/>"
}


async function ParseInlineToken(line)
{
  for(let key in inlineTags)
  {
    if(line.startsWith(key))
    {
      var tag = inlineTags[key];
      let args = line.slice(key.length).trim().split(",");
      for(let i = 0; i < args.length; i++)
      {
        let argToken = `{${i}}`;
        tag = tag.replaceAll(argToken, args[i]);
      }

      return tag;
    }
  }

  return "";
}

async function ParseMultiLineToken(i, lines)
{
  let line = lines[i];
  let newHtml = "";
  if (line.startsWith("[List]"))
  {
    newHtml = "<ul>";
    line = lines[++i];
    while(line.length && !line.startsWith("[/List]"))
    {
      newHtml += `<li>${line}</li>`;
      line = lines[++i];
    }
    newHtml += "</ul>";
  }
  else if (line.startsWith("[Text]"))
  {
    line = lines[++i];
    newHtml = "<div class='text-container'>";
    while(line.length && !line.startsWith("[/Text]"))
    {
      newHtml += line;
      line = lines[++i];
    }
    newHtml += "</div>";
  }

  return newHtml;
}

export async function ParseTxtContent(fileName) 
{
  let re = await fetch(fileName);
  let text = await re.text();

  let lines = text.split("\n");
  let parsedText = "";
 
  for(let i = 0; i < lines.length; i++)
  {
    let line = lines[i];
    
    let tmpHtml = await ParseInlineToken(line);
    if(!tmpHtml)
    {
      tmpHtml = await ParseMultiLineToken(i, lines);
    }

    parsedText += tmpHtml;
  }

  return parsedText;
}








