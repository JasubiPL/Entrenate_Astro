import * as React from "react"

const UserIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    width={props.width}
    height={props.height}
    {...props}
    className='fill-secundari lg:fill-current'
  >
    <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0ZM7 21.797V18.5c0-.827.673-1.5 1.5-1.5h7c.827 0 1.5.673 1.5 1.5v3.297C15.499 22.566 13.799 23 12 23s-3.499-.434-5-1.203Zm11-.582V18.5c0-1.379-1.122-2.5-2.5-2.5h-7A2.503 2.503 0 0 0 6 18.5v2.715C2.992 19.25 1 15.853 1 12 1 5.935 5.935 1 12 1s11 4.935 11 11c0 3.853-1.992 7.25-5 9.215ZM12 6c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4Zm0 7c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3Z" />
  </svg>
)

export default UserIcon