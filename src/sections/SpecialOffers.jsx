const SpecialOffers = () => {
  return (
    <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We provide you <span className="text-coral-red inline-block">Super</span> <span className="text-coral-red inline-block">Quality</span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
        <p className="mt-6 lg:max-w-lg info-text">Our dedication to detail and excellence ensures your satisfaction</p>
        <div className="mt-11">
          <Button label={"View details"}/>
        </div>
    </div>
  )
}

export default SpecialOffers