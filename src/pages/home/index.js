import React, {createRef} from 'react';
import Header from "../../components/header";
import Category from "../../components/category";
import Banner from "../../components/banner";
import {SwiperSlide,HomeWrapper} from './styled'
import Artist from "../../components/artist";
import {HomeModel} from "../../servers/home";
import List from "../../components/list";
import Loading from "../../components/loading";
import TabBottom from "../../layout/tabBottom";


const homeModel = new HomeModel()
class Home extends React.Component {
    state = {
        artistData:[],//演员列表
        id: null,
        bannerData:[],//轮播图
        isloading:true,
        listData: []//列表数据
    }
    pageNum = 1;
    wrapperRef = createRef();
    flag = false;

    componentDidMount() {
        if (this.props.location.state) {
            this.setState({id: this.props.location.state.id}, () => {
                this.getData()
            })
        } else {
            this.setState({id:30}, () => {
                this.getData()
            })
        }
        this.wrapperRef.current.addEventListener('scroll', (e) => {
            const scrollTop = this.wrapperRef.current.scrollTop;
            const listH = this.list.offsetHeight;
            const listT = this.list.offsetTop;
            const bodyH = document.documentElement.clientHeight;
            const tabH = 50;
            if (this.flag) {
                return
            }
            if (listT+listH-scrollTop-tabH<=bodyH) {
                this.flag = true;
                this.loadMore()
            }

        })
    }
    //加载更多
    loadMore = () => {
        homeModel.getListData(this.pageNum,this.state.id)
            .then(res=>{
                if(res.data.length === 0){
                    return false
                }
                if(this.pageNum<4){
                    this.setState({
                        listData: this.state.listData.concat(res.data)
                    })
                    this.pageNum+=1
                }else {
                    return false
                }
                this.flag = false
            })
            .catch(err=>{
                this.flag = false
            })
    }

    getData = () => {
       Promise.all(
            [
                //主页数据
                homeModel.getHomeData(this.state.id),
                //获取明星数据
                homeModel.getArtist(),
                //获取列表数据
                homeModel.getListData(this.pageNum,this.state.id)
            ])
          .then(res=>{
              this.setState({
                  isloading:false
              })
              this.setState({
                  bannerData:res[0].data.middleBannerAds[0].adVOList
              })
              this.setState({
                  artistData:res[1].data
              })
              this.pageNum += 1;
              this.setState({
                  listData: res[2].data
              })
          })
    }

    render() {
        return (
            <HomeWrapper ref={this.wrapperRef}>
                {
                    this.state.isloading ? <Loading /> :
                        <>
                        {/*头部*/}
                        <Header city={this.props.history.location.state ? this.props.history.location.state.city : '深圳' }/>
                        {/*分类*/}
                        <Category/>
                        {/*轮播图*/}
                        <SwiperSlide>
                            {
                                this.state.bannerData ?
                                    <Banner delay>
                                        {
                                            this.state.bannerData.map(val=>(
                                                <div className="swiper-slide" key={val.id}>
                                                    <img src={val.materialVOList[0].value} alt=""/>
                                                </div>
                                            ))
                                        }
                                    </Banner>
                                    : ''
                            }
                        </SwiperSlide>
                        {/*大咖新动态*/}
                        <Artist data={this.state.artistData} />
                        {/*列表数据*/}
                        <List listData={this.state.listData} ref={(el) => this.list = el} id={this.state.id} history={this.props.history}/>
                        <TabBottom />
                    </>
                }

            </HomeWrapper>
        );
    }
}

export default Home;