import { toast, Bounce } from "react-toastify";

const toastOptions = {
  position: 'top-center' as const,
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light' as const,
  transition: Bounce,
}
export toastOptions