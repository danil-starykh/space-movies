import Box from "@mui/material/Box";
import { FC } from "react";
import Slider from "react-slick";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface IScreenshotsSliderProps {
  screenshots: IScreenshot[];
}

interface IScreenshot {
  screenshotUrl: string;
  altValue: string;
}

const PrevArrow = ({currentSlide, slideCount, ...props}: any) => (
    <ArrowBackIosNewIcon
      sx={{ 
        color: 'primary.light', 
        '&:hover': {
          color: 'primary.dark',
        },
      }} 
      {...props}
  />
);

const NextArrow = ({currentSlide, slideCount, ...props}: any) => (
    <ArrowForwardIosIcon
      sx={{ 
        color: 'primary.light', 
        '&:hover': {
          color: 'primary.dark',
        },
      }} 
      {...props}
    />
);

export const ScreenshotsSlider: FC<IScreenshotsSliderProps> = ({ screenshots }) => {

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };

  return (
    <Box component="div">
      <Slider {...sliderSettings}>
        {screenshots.map((screenshot : IScreenshot, index: number) => (
            <Box
              component="img"
              sx={{ height: '300px' }}
              key={index}
              src={`${screenshot.screenshotUrl}`}
              srcSet={`${screenshot.screenshotUrl}`}
              alt={screenshot.altValue}
              loading="lazy"
            />
        ))}
      </Slider>
    </Box>
  );
}