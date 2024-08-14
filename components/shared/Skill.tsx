interface Props {
    title: string,
    desc: string,
}   

const Skill = ({title, desc}: Props) => {
  return (
    <li className="mb-3">
      <h4 className="text-primary-500 h5-semibold">{title}</h4>
      <p>{desc}</p>
    </li>
  )
}

export default Skill