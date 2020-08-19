type Props = {
  title: string
  place: string
  date: string
  description: string
}

const Job = ({ title, place, date, description }: Props) => {
  return (
    <div className="mb-8">
      <h3 className="text-3xl lg:text-6xl leading-tight">{title}</h3>
      <p>
        <span className="text-gray-600 italic">{date}</span> - {place}
      </p>
      <p className="text-lg leading-relaxed mb-4">{description}</p>
    </div>
  )
}

export default Job
