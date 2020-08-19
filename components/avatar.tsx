type Props = {
  name: string
  picture: string
  post?: string
  gray?: boolean
}

const Avatar = ({ name, picture, post, gray }: Props) => {
  return (
    <div className="flex items-center">
      <img
        src={picture}
        className="w-12 h-12 rounded-full mr-4"
        alt={name}
        loading="lazy"
        style={{ filter: gray ? 'grayscale(1)' : '' }}
      />
      <div>
        <div className="text-xl font-bold">{name}</div>
        <div>{post}</div>
      </div>
    </div>
  )
}

export default Avatar
