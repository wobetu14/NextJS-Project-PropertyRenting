import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon,
} from "react-share";

const ShareButtons = ({ property }) => {
  const shareURL = `${process.env.NEXT_PUBLIC_DOMAIN}/property/${property._id}`;
  return (
    <>
      <h3 className="text-xl font-bold text-center pt-2">
        Share This Property
      </h3>
      <div className="flex gap-3 justify-center pb-5">
        <FacebookShareButton
          url={shareURL}
          quote={property.name}
          hashtag={`#${property.type.replace(/\s/g, "")}ForRent`}
        >
          <FacebookIcon size={40} round={true} />
        </FacebookShareButton>

        <TwitterShareButton
          url={shareURL}
          title={property.name}
          hashtags={[`${property.type.replace(/\s/g, "")}ForRent`]}
        >
          <TwitterIcon size={40} round={true} />
        </TwitterShareButton>

        <WhatsappShareButton
          url={shareURL}
          title={property.name}
          separater=":: "
        >
          <WhatsappIcon size={40} round={true} />
        </WhatsappShareButton>

        <EmailShareButton
          url={shareURL}
          subject={property.name}
          body={`Hey! Checkout this property listing.`}
        >
          <EmailIcon size={40} round={true} />
        </EmailShareButton>
      </div>
    </>
  );
};

export default ShareButtons;
