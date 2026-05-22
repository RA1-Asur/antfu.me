export interface Photo {
  name: string
  url: string
  text?: string
  link?: string
}

const photos: Photo[] = [
  { name: 'Comeback toh hoga', url: 'https://i.imgur.com/UGCBKZQ.gif', text: '#calllofduty' },
  { name: 'Aaj se hoga comeback!!!', url: 'https://postimg.cc/Sj2t9f85', text: '#callforduty' },
]

export default photos
