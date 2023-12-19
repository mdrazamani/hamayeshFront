import React, { Component } from "react";
import { Link } from "react-router-dom";
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
// import Loading from "../../common/Loading";
import FetchDataService from "../../../utils/fetchDataFunc";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../../../assets/css/mainStyle.css";
import PosterModal from "../others/posterModal";
import LoadingComponent from "../../common/loading.js";
import HelmetComponent from "../../common/helmet.js";
import ReactPlayer from 'react-player';
import Modal from 'react-modal';

class HomePageTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
        isZoomed: false,
        language:
                localStorage.getItem("language") ||
                process.env.REACT_APP_DEFAULT_LANGUAGE,
        number: 0,
        showModal: false,
        currentVideoUrl: null,
        currentVideoTitle: null,
        currentVideoDescription: null
      
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
  window.addEventListener("languageChanged", this.handleLanguageChange);
    this.fetchDataFunction();
    this.fetchDataFunctionSupporter();
}

componentDidUpdate(prevProps, prevState) {
  if (prevState.language !== this.state.language) {
      this.fetchDataFunctionSupporter();
  }
}

componentWillUnmount() {
  window.removeEventListener(
      "languageChanged",
      this.handleLanguageChange
  );
}

handleLanguageChange = (event) => {
  if (event.detail !== this.state.language) {
      this.setState({ language: event.detail });
  }
};

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

        <Link 
          to={`contact/${company?.id}`}
          onClick={this.scrollTop}
          replace
          >
          {company.logo && <img src={process.env.REACT_APP_SERVER_IP + company.logo} alt={company.name} className="company-logo" />}
        </Link>
        <Link 
          to={`contact/${company?.id}`}
          onClick={this.scrollTop}
          replace
          style={{color: "#222"}}
          >
          <h4>{company.name}</h4>
          </Link>
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

openModal = (videoUrl, title, desc) => {
  this.setState({ 
    showModal: true, 
    currentVideoUrl: videoUrl,
    currentVideoTitle: title,
    currentVideoDescription: desc
  });
};

closeModal = () => {
  this.setState({ 
    showModal: false, 
    currentVideoUrl: null,
    currentVideoTitle: null,
    currentVideoDescription: null
  });
};

videoCard = (t, video) => {
  return (
    <div className="video-card" 
    onClick={() => this.openModal(process.env.REACT_APP_SERVER_IP + video.path, video.title, video.description)}
    style={{
      margin: "15px",
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
      marginBottom: '20px',
      backgroundColor: "black",
      transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
    }}
    onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
    onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}>
      <div 
        style={{position: "relative",}}
      >
        <img 
          src={process.env.REACT_APP_SERVER_IP + video.cover} 
          alt="Preview" 
          style={{ 
            width: '100%',
            maxHeight: "295px",
            objectFit: "cover",
            borderRadius: "7px"
          }}
        />
        <div style={{ 
            position: "absolute", 
            padding: '10px', 
            color: "white", 
            bottom: "10px", 
            left: "10px", 
            right: "10px",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            borderRadius: "7px",
          }}>
          <h6 style={{ margin: '5px 0' }}>{video.title}</h6>
          {/* <p style={{ fontSize: "0.9em" }}>{video.description}</p> */}
        </div>
      </div>
    </div>
  );
};




toggleZoom = () => {
  this.setState((prevState) => ({
      isZoomed: !prevState.isZoomed,
  }));
};


scrollTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}


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

    const { language } = this.state;
    this.state.number += 1;
    const speakerKey = `speaker-${language}`; 
    const newsKey = `news-${language}`; 
    const {t} = this.props;

    const { data, loading, error } = this.context;

    if (!data["visitData"]) return null;
    if (!data["supportersData"]) return null;

        // if (loading["visitData"]) {
        //     return <Loading />;
        // }

        if (error["visitData"]) {
            return <Error message={error["visitData"].message} />;
        }

        const visit = data["visitData"] || [];
        //const supporters = data["supportersData"] || [];
        const Fsupporters = this.dataMakerSupporter("Financial");



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

{this.state.showModal && (
        <Modal 
        isOpen={this.state.showModal} 
        onRequestClose={this.closeModal}
        style={{
          direction: language==="fa" ? "rtl" : "ltr",
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1000,
          },
          content: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '70%',
            height: '95vh', // ارتفاع مدال را به 70% از ارتفاع صفحه تنظیم کرده‌ایم
            overflow: 'auto',
            borderRadius: '10px',
            padding: '20px',
            zIndex: 1001,
            display: 'flex',
            flexDirection: 'column', // استفاده از Flexbox برای ترتیب عناصر
          }
        }}
      >
        <div style={{ position: 'relative', marginBottom: '20px' }}>
          <button 
            onClick={this.closeModal} 
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: 'none',
              border: 'none',
              fontSize: '25px',
              color: 'red',
              cursor: 'pointer'
            }}
          >
            &times;
          </button>
          <h3 style={{ textAlign: 'center' }}>{this.state.currentVideoTitle}</h3> {/* عنوان ویدیو */}
        </div>
        <ReactPlayer 
          url={this.state.currentVideoUrl} 
          playing={true} 
          controls={true} 
          width='100%'
          height='100%'
          style={{ flexGrow: 1 }} // این امکان را فراهم می‌کند تا ویدیو بیشتر فضای موجود را اشغال کند
        />
      </Modal>
      
      )}



        <div key={this.state.number}>
        <HelmetComponent
            title={this.state.language === "fa" ? hamayeshDetail?.data?.faTitle : hamayeshDetail?.data?.enTitle}
            description={hamayeshDetail?.data?.description}
            imageUrl={
                process.env.REACT_APP_SERVER_IP +
                hamayeshDetail?.data?.headerImage
            }
        />
        <LoadingComponent />
        </div>
        <HeroArea />




        <div className="about-wrapper mt-96" style={{marginTop: "100px"}}>
                    <div className="container">

        <div className="about-company">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="company-info">
                         
                                        <h2 style={{ padding: "10px" }}>
                                            {language === "fa"
                                                ? hamayeshDetail?.data?.faTitle
                                                : hamayeshDetail?.data?.enTitle}
                                        </h2>
                                       
                                        <p style={{width: "70%"}}>
                                            {hamayeshDetail?.data?.description}
                                        </p>
                                       
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="company-mini-gallary">
                                    
                                        <div className="Gallary-item3 Gallary-item">
                                            
                                            <div
                                                style={{
                                                    textAlign: "center",
                                                    marginTop: "-150px",
                                                }}
                                            >
                                                <PosterModal
                                                    hamayeshDetail={
                                                        hamayeshDetail
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>



      

{(hamayeshDetail?.data?.teasers.length > 0) ? (<div className="container" style={{ textAlign: "center", marginTop: "100px" }}>
        <div className="row">
          <div className="section-head-style-two" style={{ marginTop: "50px" }}>
            <h3><span>{t("teasers")}</span></h3>
          </div>
          <div className="organ">
            <Slider {...settings}>
              {hamayeshDetail?.data?.teasers?.map((video, index) => (
                this.videoCard(t, video)
              ))}
            </Slider>
          </div>
        </div>
      </div>) : null }










        <div className="container" style={{textAlign: "center", marginTop: "200px"}}>
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

  <div style={{height: "100px"}}></div>
        <RecentEventSchedule />

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

            

        {/* <EventArea /> */}
       
        <AchivmentArea />
        <SpeakerSliderArea key={speakerKey} />
        {/* <SponsorSLiderArea /> */}
        {/* <Testimonial /> */}
        <PricingArea />
        <BlogArea key={newsKey} />

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
