import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

const Form = () => {
  return (
    <>
        <form>
            <Input placeholder="John Doe" />
            <Input placeholder="email" />
        </form>
    </>
  )
}

export default Form