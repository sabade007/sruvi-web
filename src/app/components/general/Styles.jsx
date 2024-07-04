export const Para = ({
  text,
  white,
  primary,
  secondary,
  color,
  mr,
  mt,
  ml,
  mb,
}) => {
  return (
    <h1
      className={`${white && "text-white"} ${secondary && "text-secondary"} ${
        primary && "text-primary"
      } ${color && "text-[" + color + "]"} 
       ${ml && "ml-" + ml} ${mr && "mr-" + mr} ${mt && "mt-" + mt} ${
        mb && "mb-" + mb
      }
      
      
      xs:text-sm sm:text-sm md:text-base lg:text-base xl:text-base    xxl:text-base font-notosans text-justify `}
    >
      {text}
    </h1>
  );
};

export const Subheading = ({
  text,
  white,
  secondary,
  primary,
  color,
  mr,
  mt,
  ml,
  mb,
}) => {
  return (
    <h1
      className={`${white && "text-white"} ${secondary && "text-secondary"} ${
        primary && "text-primary"
      } ${color && "text-[" + color + "]"} 
      ${ml && "ml-" + ml} ${mr && "mr-" + mr} ${mt && "mt-" + mt} ${
        mb && "mb-" + mb
      }
      xs:text-sm sm:text-sm md:text-base lg:text-base xl:text-base   xxl:text-base font-righteous tracking-wide text-justify `}
    >
      {text}
    </h1>
  );
};

export const Heading = ({
  text,
  white,
  secondary,
  primary,
  color,
  mr,
  mt,
  ml,
  mb,
}) => {
  return (
    <h1
      className={`${white && "text-white"} ${secondary && "text-secondary"} ${
        primary && "text-primary"
      } ${color && "text-[" + color + "]"} ${mr && "mr-[" + mr + "]"}  ${
        mt && "mt-[" + mt + "]"
      } ${ml && "ml-[" + ml + "]"} ${mb && "mb-[" + mb + "]"}
      xs:text-base sm:text-base  md:text-lg lg:text-lg xl:text-lg xxl:text-xl font-righteous tracking-wide text-justify `}
    >
      {text}
    </h1>
  );
};

export const LargeHeading = ({
  text,
  white,
  secondary,
  primary,
  color,
  mr,
  mt,
  ml,
  mb,
}) => {
  return (
    <h1
      className={`${white && "text-white"} ${secondary && "text-secondary"} ${
        primary && "text-primary"
      } ${color && "text-[" + color + "]"} ${mr && "mr-[" + mr + "]"}  ${
        mt && "mt-[" + mt + "]"
      } ${ml && "ml-[" + ml + "]"} ${mb && "mb-[" + mb + "]"}
      xs:text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl xxl:text-4xl font-righteous tracking-wide text-justify `}
    >
      {text}
    </h1>
  );
};

import { Button } from "@mui/material";

export const But = ({
  text,
  bgprimary,
  fullWidth,
  bgsecondary,
  bgblack,
  bgwhite,
  onClick,
}) => {
  return (
    <div>
      {bgprimary && (
        <Button
          fullWidth={fullWidth}
          size="large"
          onClick={onClick}
          variant="outlined"
          sx={{
            color: "#48c43c",
            borderColor: "#48c43c",
            "&:hover": {
              borderColor: "#48c43c",
              backgroundColor: "#48c43c",
              color: "white",
            },
          }}
        >
          <Subheading text={text}></Subheading>
        </Button>
      )}

      {bgsecondary && (
        <Button
          fullWidth={fullWidth}
          size="large"
          onClick={onClick}
          variant="outlined"
          sx={{
            color: "FF812B",
            borderColor: "FF812B",
            "&:hover": {
              borderColor: "FF812B",
              backgroundColor: "FF812B",
              color: "black",
            },
          }}
        >
          <Subheading text={text}></Subheading>
        </Button>
      )}

      {bgblack && (
        <Button
          fullWidth={fullWidth}
          size="large"
          onClick={onClick}
          variant="outlined"
          sx={{
            color: "black",
            borderColor: "black",
            "&:hover": {
              borderColor: "black",
              backgroundColor: "black",
              color: "white",
            },
          }}
        >
          <Subheading text={text}></Subheading>
        </Button>
      )}

      {bgwhite && (
        <Button
          fullWidth={fullWidth}
          size="large"
          onClick={onClick}
          variant="outlined"
          sx={{
            color: "white",
            borderColor: "white",
            "&:hover": {
              borderColor: "white",
              backgroundColor: "white",
              color: "black",
            },
          }}
        >
          <Subheading text={text}></Subheading>
        </Button>
      )}
    </div>
  );
};
