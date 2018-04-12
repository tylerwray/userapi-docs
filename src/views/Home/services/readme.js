import axios from 'axios'

export const getReadme = async () => {
  let markdown = localStorage.getItem('userapi-markdown')

  if (!markdown || isREADMEExpired()) {
    const res = await axios.get('https://api.github.com/repos/wraytw/userapi.io/contents/README.md?ref=master')
    markdown = atob(res.data.content)
    setREADME(markdown)
  }

  return markdown
}

function isREADMEExpired() {
  const ONE_HOUR_IN_MILLISECONDS = 3600000

  const now = Date.now()
  const storedTime = localStorage.getItem('userapi-stored-time')

  return (now - storedTime) > ONE_HOUR_IN_MILLISECONDS
}

function setREADME(markdown) {
  localStorage.setItem('userapi-stored-time', Date.now())
  localStorage.setItem('userapi-markdown', markdown)
}
