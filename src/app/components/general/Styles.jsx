export const Para = ({ text, white, primary, secondary }) => {
  return (
    <h1
      className={`${white && "text-white"} ${secondary && "text-secondary"} ${
        primary && "text-primary"
      }  sm:text-sm md:text-sm lg:text-md xl:text-md  xxl:text-md font-notosans text-justify `}
    >
      {text}
    </h1>
  );
};

export const Subheading = ({ text, white, secondary, primary }) => {
  return (
    <h1
      className={`${white && "text-white"} ${secondary && "text-secondary"} ${
        primary && "text-primary"
      } 
      sm:text-md md:text-md lg:text-lg xl:text-lg xxl:text-xl font-righteous tracking-wide text-justify `}
    >
      {text}
    </h1>
  );
};

export const Heading = ({ text, white, secondary, primary }) => {
  return (
    <h1
      className={`${white && "text-white"} ${secondary && "text-secondary"} ${
        primary && "text-primary"
      } 
       sm:text-lg md:text-lg lg:text-xl xl:text-xl xxl:text-2xl font-righteous tracking-wide text-justify `}
    >
      {text}
    </h1>
  );
};

export const LargeHeading = ({ text, white, secondary, primary }) => {
  return (
    <h1
      className={`${white && "text-white"} ${secondary && "text-secondary"} ${
        primary && "text-primary"
      } 
       sm:text-xl md:text-xl lg:text-2xl xl:text-2xl xxl:text-3xl font-righteous tracking-wide text-justify `}
    >
      {text}
    </h1>
  );
};
