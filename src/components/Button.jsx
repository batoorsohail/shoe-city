const Button = ({label, iconURL, backgroundColor, borderColor, textColor, fullWidth}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      ${backgroundColor ? `${backgroundColor} ${borderColor} ${textColor}`
      : "bg-coral-red text-white border-coral-red"} rounded-full ${fullWidth && 'w-full'}"} hover:text-coral-red hover:bg-white hover:border-coral-red duration-500 ease-in-out`}
    >
      {label}
      {iconURL && <img src={iconURL} alt="icon arrow right" className="hover:translate-x-1.5 duration-500 ease-in-out"/>}
    </button>
  )
}

export default Button