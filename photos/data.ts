export interface Photo {
  name: string
  url: string
  text?: string
  link?: string
}

const photos: Photo[] = [
  { name: 'Sab Bhaad me Jaaye', url: 'https://i.postimg.cc/FsL9fMr5/IMG-20241014-032736.jpg', text: '#3 lectures', link: 'https://i.postimg.cc/FsL9fMr5/IMG-20241014-032736.jpg' },
  { name: 'Comeback toh hoga', url: 'https://i.imgur.com/UGCBKZQ.gif', text: '#calllofduty' },
]

export default photos
