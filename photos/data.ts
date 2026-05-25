export interface Photo {
  name: string
  url: string
  text?: string
  link?: string
}

const photos: Photo[] = [
  { name: 'You have to start from somewhere Akshat', url: 'https://i.postimg.cc/Yq9c9wKL/images-(1)-2026-05-25T103408-455.jpg', link: 'https://www.reddit.com/r/wholesomememes/comments/w1486e/funny_but_wholesome/' },
  { name: 'Sab Bhaad me Jaaye', url: 'https://i.postimg.cc/FsL9fMr5/IMG-20241014-032736.jpg', text: '#3 lectures', link: 'https://i.postimg.cc/FsL9fMr5/IMG-20241014-032736.jpg' },
  { name: 'Comeback toh hoga', url: 'https://i.imgur.com/UGCBKZQ.gif', text: '#calllofduty' },
]

export default photos
