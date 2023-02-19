import * as React from "react"

const BlogIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={props.width}
    height={props.height}
    {...props}
    className='fill-white hover:fill-green-500'
  >
    <path d="M18 19v4.7a4.968 4.968 0 0 0 1.879-1.164l2.656-2.658A4.954 4.954 0 0 0 23.7 18H19a1 1 0 0 0-1 1ZM7.172 13.828A4 4 0 0 0 6 16.657V18h1.343a4 4 0 0 0 2.829-1.172L21.5 5.5a2.121 2.121 0 0 0-3-3Z" />
    <path d="M24 4.952a4.087 4.087 0 0 1-1.08 1.962L11.586 18.243A5.961 5.961 0 0 1 7.343 20H6a2 2 0 0 1-2-2v-1.343a5.957 5.957 0 0 1 1.758-4.242L17.086 1.086A4.078 4.078 0 0 1 19.037 0H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h11v-5a3 3 0 0 1 3-3h5V4.952Z" />
  </svg>
)

export default BlogIcon