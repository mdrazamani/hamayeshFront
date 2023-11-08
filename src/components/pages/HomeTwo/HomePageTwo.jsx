import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import AchivmentArea from "./AchivmentArea";
import BlogArea from "./BlogArea";
import HeroArea from "./HeroArea";
import PricingArea from "./PricingArea";
import RecentEventSchedule from "./RecentEventSchedule";
import SpeakerSliderArea from "./SpeakerSliderArea";
import Slider from 'react-slick';
import DataContext from "../../../context/DataContext";
import Error from "../../common/Error";
import Loading from "../../common/Loading";
import FetchDataService from "../../../utils/fetchDataFunc";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../../../assets/css/mainStyle.css";
import PosterModal from "../others/posterModal";

class HomePageTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
        isZoomed: false,
    };
}
  static contextType = DataContext; // Using the contextType to access the DataContext

  fetchDataFunction = () => {
    // Options should be set according to the parameters your API needs
    const options = {
        page: 1,
        totalPages: 12, // this should probably be 'pageSize
        dataName: "visitData",
        api: {
            apiTitle: "daily-visits",
            id: null, // If these values are unnecessary, you could remove them
            subTitle: null, // same as above
            options: null, // same as above
        },
    };

    // Here, we're passing the context's fetchData method to our service
    FetchDataService(this.context.fetchData, options);
};

fetchDataFunctionSupporter = () => {
  // Options should be set according to the parameters your API needs
  const options = {
      page: 1,
      totalPages: 12, // this should probably be 'pageSize
      dataName: "supportersData",
      api: {
          apiTitle: "supporters",
          id: null, // If these values are unnecessary, you could remove them
          subTitle: null, // same as above
          options: null, // same as above
      },
  };

  // Here, we're passing the context's fetchData method to our service
  FetchDataService(this.context.fetchData, options);
};

componentDidMount() {
    this.fetchDataFunction();
    this.fetchDataFunctionSupporter();
}

dataMaker() {
  const currentData = this.context.data["OrganizerDataHeader"];
 
  if (currentData) {
      return currentData.data;
  }
}


dataMakerSupporter(type) {
  const currentData = this.context.data["supportersData"];
 
  if (currentData) {
    if(type == "Financial")
        return currentData.data.data.filter(item => item.supportType === type);
      else
        return currentData.data.data.filter(item => item.supportType === type);
  }
}


CompanyCard(t,company) {

  return (
      <div className="company-card">
        
        {company?.isMain &&
    <span style={{position: "absolute", top: "10px", right: "10px", backgroundColor: "#ce1446", color: "white", padding: "5px 10px", borderRadius: "5px"}}>
        {t("isMain")}
    </span>
}

        {company.logo && <img src={process.env.REACT_APP_SERVER_IP + company.logo} alt={company.name} className="company-logo" />}
          <h4>{company.name}</h4>
          {/* <p className="description">{company.details.description}</p> */}
          <a href={company.link} target="_blank" rel="noopener noreferrer" className="company-link">
              {t("Visit_Website")}
          </a>
      </div>
  );
}


SupporterCard = ( t ,supporter) => {
  return (
      <div className="supporter-card" >
          <span>{supporter.isMain ? `${t("isMain")}` : ""}</span>
          {supporter.logo && <img src={process.env.REACT_APP_SERVER_IP + supporter.logo} alt={supporter.name} className="company-logo" />}
          <h4>{supporter.name}</h4>
          <p className="description">{supporter.details?.description}</p>
          <a href={supporter.link} target="_blank" rel="noopener noreferrer" className="company-link">
              {t("Visit_Website")}
          </a>
      </div>
  );
}



toggleZoom = () => {
  this.setState((prevState) => ({
      isZoomed: !prevState.isZoomed,
  }));
};



renderImagePreview(src, alt) {
  const isZoomed = this.state.isZoomed;

  const imageStyle = isZoomed
      ? { width: '100%', height: 'auto', cursor: 'zoom-out', transition: 'width 0.3s, height 0.3s' }
      : { width: '300px', height: 'auto', cursor: 'zoom-in', transition: 'width 0.3s, height 0.3s' };

  return (
      <div onClick={this.toggleZoom} style={{ textAlign: 'center', maxWidth: '100%' }}>
          <img src={src} alt={alt} style={imageStyle} />
      </div>
  );
}


  render() {
    const {t} = this.props;

    const { data, loading, error } = this.context;

    if (!data["visitData"]) return null;
    if (!data["supportersData"]) return null;

        if (loading["visitData"]) {
            return <Loading />;
        }

        if (error["visitData"]) {
            return <Error message={error["visitData"].message} />;
        }

        const visit = data["visitData"] || [];
        //const supporters = data["supportersData"] || [];
        const Fsupporters = this.dataMakerSupporter("Financial");

        console.log("Fsupporters: ", Fsupporters);

        const Asupporters = this.dataMakerSupporter("Academic");


        if (!data["hamayeshDetail"]) return null;

        const organizers = this.dataMaker();
        const organizerCount = organizers?.payload?.pagination?.total;

    const hamayeshDetail = data["hamayeshDetail"] || [];

    const settings = {
      dots: true,
      infinite: true,
      speed: 1500,
      slidesToShow: organizerCount >= 4 ? 4 : 2,
      slidesToScroll: organizerCount >= 4 ? 4 : 2,
      autoplay: true,           
      autoplaySpeed: 3000,  
  };


  const supporterSettings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,           
    autoplaySpeed: 3000,  
};




    return (
      <>
        <HeroArea />
        <div className="container" style={{textAlign: "center", marginTop: "150px"}}>
            <div className="row">
              <div className="section-head-style-two"  style={{marginTop: "50px"}}>
                <h3>
                  {t("Organizers_header1")}{" "}
                  <span>{t("Organizers_header2")}</span>
                </h3>
              </div>
            <div className="organ">
            <Slider {...settings} >
                {organizers?.data?.map(company => (
                    this.CompanyCard(t, company)
                ))}
            </Slider>
            </div>
            </div>
        </div>

        <div className="container" style={{textAlign: "center", marginTop: "150px",}}>
            <div className="row">
            <div className="col-lg-6" style={{marginTop: "50px"}}>
              <div className="section-head-style-two">
                <h3>
                  {t("Supporter_header1")}{" "}
                  <span>{t("Supporter_header2")}</span>
                </h3>
              </div>
            
            <div className="hami">
              <Slider {...supporterSettings}  >
                  {Fsupporters?.map(supporter => (
                      this.SupporterCard(t, supporter)
                  ))}
              </Slider>
            </div>
            </div>

            <div className="col-lg-6" style={{marginTop: "50px"}}>
              <div className="section-head-style-two">
                <h3>
                  {t("Supporter_header1")}{" "}
                  <span>{t("Supporter_header3")}</span>
                </h3>
              </div>
              <div className="hami">
              <Slider {...supporterSettings}>
              {Asupporters?.map(supporter => (
                      this.SupporterCard(t, supporter)
                  ))}
              </Slider>
            </div>
            </div>

            </div>
        </div>


            {/* <div className="container" style={{textAlign: "center", marginTop: "150px",}}>
            <div className="row">
            <div className="col-lg-12">
              <div className="section-head-style-two">
                <h3>
                  <span>{t("Conference_poster")}</span>
                </h3>
              </div>
                {this.renderImagePreview(`${process.env.REACT_APP_SERVER_IP}${hamayeshDetail?.data?.poster}`, hamayeshDetail?.data?.faTitle ? hamayeshDetail?.data?.faTitle : hamayeshDetail?.data?.enTitle)}
            </div>
            </div>
            </div> */}

            <div style={{textAlign: "center", margin: "auto 0"}}>
              <PosterModal hamayeshDetail={hamayeshDetail} />
            </div>


        {/* <EventArea /> */}
        <RecentEventSchedule />
        <AchivmentArea />
        <SpeakerSliderArea />
        {/* <SponsorSLiderArea /> */}
        {/* <Testimonial /> */}
        <PricingArea />
        <BlogArea />

        {/* <div className="statistics-container" style={{margin: "50px auto", fontFamily: "mikhak"}}>
            <h2>{t("Daily_visit_statistics")}</h2>
            <div className="stat-item">
                <label>{t("Today")}:</label>
                <span>{visit?.data?.today || t("no_data_available")}</span>
            </div>
            <div className="stat-item">
                <label>{t("Yesterday")}:</label>
                <span>{visit?.data?.yesterday || t("no_data_available")}</span>
            </div>
            <div className="stat-item">
                <label>{t("Last_week")}:</label>
                <span>{visit?.data?.lastWeek || t("no_data_available")}</span>
            </div>
            <div className="stat-item">
                <label>{t("Last_month")}:</label>
                <span>{visit?.data?.lastMonth || t("no_data_available")}</span>
            </div>
        </div> */}

        {/* <NewsLetter /> */}
        {/* All section componetn import end  */}
      </>
    );
  }
}

export default withTranslation()(HomePageTwo);