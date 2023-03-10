import * as React from "react"

const GymIcon = (props) => (
  <svg
    height={props.height}
    viewBox="0 0 24 24"
    width={props.width}
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    {...props}
    className='fill-white hover:fill-secundari'
  >
    <path d="M22.942 6.837 20.76 4.654l.947-.947a1 1 0 1 0-1.414-1.414l-.947.947-2.183-2.182a3.7 3.7 0 0 0-5.105 0 3.609 3.609 0 0 0 0 5.106l2.182 2.182-5.894 5.894-2.183-2.182a3.7 3.7 0 0 0-5.105 0 3.609 3.609 0 0 0 0 5.106l2.182 2.182-.947.947a1 1 0 1 0 1.414 1.414l.947-.947 2.183 2.182a3.609 3.609 0 0 0 5.105 0 3.608 3.608 0 0 0 0-5.105L9.76 15.655l5.9-5.895 2.182 2.182a3.609 3.609 0 0 0 5.105 0 3.608 3.608 0 0 0 0-5.105z" />
  </svg>
)

export default GymIcon