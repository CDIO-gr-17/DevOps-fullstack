import { Terminal } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

function AlertConfirmation(message: string) {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Confirmation</AlertTitle>
      <AlertDescription>
        {message}
      </AlertDescription>
    </Alert>
  )
}

export default AlertConfirmation;