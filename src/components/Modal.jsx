import { useRef } from 'react'

export default function Modal({ children, onClose, onClick, isDeleting }) {
  const modalRef = useRef()
  const handleClose = (e) => {
    // console.log(e.target)
    if (modalRef.current === e.target) onClose()
  }
  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-gray-900/10 backdrop-blur-sm z-10"
      onClick={handleClose}
      ref={modalRef}
    >
      {children}
    </div>
  )
}
