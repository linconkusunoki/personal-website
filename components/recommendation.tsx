import Avatar from './avatar'

type Props = {
  name: string
  picture: string
  post: string
  description: string
}

const Recommendation = ({ name, description, post, picture }: Props) => {
  return (
    <div className="mb-16 lg:mb-0">
      <p className="text-lg leading-relaxed mb-4">{description}</p>
      <Avatar name={name} post={post} picture={picture} gray />
    </div>
  )
}

export default Recommendation
