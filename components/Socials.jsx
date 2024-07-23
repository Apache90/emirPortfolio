import Link from "next/link"
import {FaGithub, FaLinkedin} from "react-icons/fa"

const socials= [
    {icon: <FaGithub/>, path:"https://github.com/Apache90"},
    {icon: <FaLinkedin/>, path:"https://www.linkedin.com/in/emir-segovia-74b392113/"},
]
const Socials = ({containerStyles, iconStyles}) => {
  return (<div className={containerStyles}>
    {socials.map((item, index)=>{
        return <Link key={index} href={item.path} className={iconStyles} target="_blank">{item.icon}</Link>
    })}
  </div>
  )
}

export default Socials