<<<<<<< HEAD
const Loader = () => {
    return (

        <svg version="1.1" id="L3" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 100 100" enable-background="new 0 0 0 0" xmlSpace="preserve">
            <circle fill="none" stroke="#fff" stroke-width="4" cx="50" cy="50" r="44" style="opacity:0.5;" />
            <circle fill="#fff" stroke="#e74c3c" stroke-width="3" cx="8" cy="54" r="6" >
                <animateTransform
                    attributeName="transform"
                    dur="2s"
                    type="rotate"
                    from="0 50 48"
                    to="360 50 52"
                    repeatCount="indefinite" />

=======
//Import styles
import "./styles.scss"
//commentaire test
const Loader = ({ size = 50, alternative = false }) => {
    return alternative ? (
      <svg
        width={size}
        height={size}
        className="loadingIcon"
        viewBox="0 0 38 38"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
            <stop stopColor="#fff" stopOpacity="0" offset="0%" />
            <stop stopColor="#fff" stopOpacity=".631" offset="63.146%" />
            <stop stopColor="#fff" offset="100%" />
          </linearGradient>
        </defs>
        <g fill="none" fillRule="evenodd">
          <g transform="translate(1 1)">
            <path
              d="M36 18c0-9.94-8.06-18-18-18"
              id="Oval-2"
              stroke="url(#a)"
              strokeWidth="2"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 18 18"
                to="360 18 18"
                dur="0.9s"
                repeatCount="indefinite"
              />
            </path>
            <circle fill="#fff" cx="36" cy="18" r="1">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 18 18"
                to="360 18 18"
                dur="0.9s"
                repeatCount="indefinite"
              />
>>>>>>> reduxInProgress
            </circle>
        </svg>

    )
}

export default Loader
