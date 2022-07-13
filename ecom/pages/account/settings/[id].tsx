import { useRouter } from "next/router";


const Settings = () => {

  const router = useRouter();

  const { id } = router.query;

  return (
    <div>{id}</div>
  )
}


export default Settings;