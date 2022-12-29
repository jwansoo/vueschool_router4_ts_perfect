export type Experiences={
  name:string
  slug:string
  image:string
  description:string
}
export interface Destinations{
  name:string
  slug:string
  image:string
  id:number
  description:string
  experiences:Experiences
}