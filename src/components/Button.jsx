const Button = ({label, iconURL, backgroundColor, borderColor, textColor}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      ${backgroundColor ? `${backgroundColor} ${borderColor} ${textColor}`
      : "bg-coral-red text-white border-coral-red"} rounded-full w-full"}`}
    >
      {label}
      {iconURL && <img src={iconURL} alt="icon arrow right" />}
    </button>
  )
}

export default Button