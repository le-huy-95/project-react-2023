import './manageproducts.scss'

import SidebarStaff from "../sidebar/sidebar staff"
import { Link, NavLink, useHistory } from "react-router-dom"
import React, { useEffect, useState } from 'react'
import { UserContext } from "../../contexApi/UserContext"
import { getProjectWithPaginationWithALlStatusWarehouse, getAllStatusProductWithEmployer } from "../services/ProjectService"
import ReactPaginate from 'react-paginate';
import ModalChatWithCutomer from "./modalChatWithCutomer"
import moment from "moment"
import { toast } from 'react-toastify'
const ManageproductsStatusOne = (props) => {
    let history = useHistory()
    const { user } = React.useContext(UserContext);
    const [collapsed, setCollapsed] = useState(false)
    const [listProjectbyUnit, setListProjectbyUnit] = useState([])
    const [listProjectbyUnitLenght, setListProjectbyUnitLenghtt] = useState([])

    const [listProjectbyUnitWithFlag, setListProjectbyUnitWithFlag] = useState([])

    const [currentPage, setCurrentPage] = useState(
        localStorage.getItem("infomation Page employer four") ? localStorage.getItem("infomation Page employer four") : 1

    )
    const [currentLimit, setCurrentLimit] = useState(4)
    const [isLoading, SetIsLoading] = useState(false)
    const [totalPage, setTotalPage] = useState(0)
    const [showModal, setShowModal] = useState(false)
    const [dataChatOne, setDataChatOnet] = useState([])
    const [dataNumber, setdataNumber] = useState([])

    const handleShowModal = (item) => {
        setShowModal(!showModal)
        setDataChatOnet(item)
    }

    const fetchAllNumberProject = async () => {
        let res = await getAllStatusProductWithEmployer(+user.account.shippingUnit_Id)
        if (res && +res.EC === 0) {
            setdataNumber(res.DT[0])
        } else {
            toast.error(res.EM)
        }

    }


    const fetchProjectUser = async () => {

        let res = await getProjectWithPaginationWithALlStatusWarehouse(currentPage, currentLimit, +user.account.shippingUnit_Id, 1
        )
        if (res && +res.EC === 0) {
            setTotalPage(+res.DT.totalPage)
            if (res.DT.totalPage > 0 && res.DT.dataProject.length === 0) {
                setCurrentPage(+res.DT.totalPage)
                await getProjectWithPaginationWithALlStatusWarehouse(+res.DT.totalPage, currentLimit, +user.account.shippingUnit_Id, 1
                )
            }
            if (res.DT.totalPage > 0 && res.DT.dataProject.length > 0) {
                let data = res.DT.dataProject

                if (data) {
                    setListProjectbyUnitLenghtt(res.DT.totalProject)
                    setListProjectbyUnit(data)
                    SetIsLoading(true)
                    console.log("res.DT", res.DT.dataProject)

                }
            }
            if (res.DT.totalPage === 0 && res.DT.dataProject.length === 0) {
                let data = res.DT.dataProject
                setListProjectbyUnitLenghtt(res.DT.totalProject)

                setListProjectbyUnit(data)
                SetIsLoading(true)

            }
        }
    }
    const handlePageClick = (event) => {
        setCurrentPage(+event.selected + 1)
        localStorage.setItem("infomation Page employer four", +event.selected + 1)
    }


    useEffect(() => {
        fetchAllNumberProject()
        fetchProjectUser();
        let currentUrlParams = new URLSearchParams(window.location.search);
        currentUrlParams.set('page', currentPage);
        currentUrlParams.set("limit", currentLimit);

        history.push(window.location.pathname + "?" + currentUrlParams.toString());
    }, [currentPage])
    const fetchProjectUserAfterRefesh = async () => {
        let currentPagelocalStorage = +localStorage.getItem("infomation Page employer four")
        let res = await getProjectWithPaginationWithALlStatusWarehouse(+currentPagelocalStorage, currentLimit, +user.account.shippingUnit_Id, 1
        )
        if (res && +res.EC === 0) {
            setTotalPage(+res.DT.totalPage)
            if (res.DT.totalPage > 0 && res.DT.dataProject.length === 0) {
                setCurrentPage(+res.DT.totalPage)
                await getProjectWithPaginationWithALlStatusWarehouse(+res.DT.totalPage, currentLimit, +user.account.shippingUnit_Id, 1
                )
            }
            if (res.DT.totalPage > 0 && res.DT.dataProject.length > 0) {
                let data = res.DT.dataProject

                if (data) {
                    setListProjectbyUnitLenghtt(res.DT.totalProject)
                    setListProjectbyUnit(data)
                    SetIsLoading(true)
                    console.log("res.DT", res.DT.dataProject)

                }
            }
            if (res.DT.totalPage === 0 && res.DT.dataProject.length === 0) {
                let data = res.DT.dataProject
                setListProjectbyUnitLenghtt(res.DT.totalProject)

                setListProjectbyUnit(data)
                SetIsLoading(true)

            }
        }
    }
    useEffect(() => {
        window.history.pushState('', '', `?page=${localStorage.getItem("infomation Page employer four")}&limit=${currentLimit}`);

        fetchProjectUserAfterRefesh()
    }, [window.location.reload])

    return (
        <div className='employer-container '>
            <div className='left-employer  '>
                <SidebarStaff collapsed={collapsed} />

            </div>
            <div className='right-employer  '>
                <div className='btn-toggle-employer'>
                    <span onClick={() => setCollapsed(!collapsed)} className=" d-sm-block ">
                        {collapsed === false ?
                            <i className="fa fa-arrow-circle-o-left" aria-hidden="true"></i>
                            :
                            <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>

                        }
                    </span>
                </div>
                <div className='right-body-employer'>
                    <div className='container'>
                        <div className='header-employer'>
                            <div className='location-path-employer col'>
                                <Link to="/"> Home</Link>

                                <span> <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                </span>
                                <Link to="/order-processing">Order-processing </Link>
                            </div>
                            <div className='col search-employer'>
                                <div className='search-icon-employer'>
                                    <i className="fa fa-search" aria-hidden="true"></i>

                                </div>
                                <input
                                    type="text"
                                    placeholder='Search infomation'

                                />
                            </div>
                        </div>
                        <div className='body-employer'>
                            <div className="container">
                                <div className='name-page-employer'>
                                    <h4> Order processing </h4>
                                    <div className='more-employer'>
                                        <b>Giao hàng tiết kiệm</b>


                                    </div>


                                </div>
                                <div className='sort my-3'>
                                    <div className='container my-3'>
                                        <div className='row mx-3'>
                                            <div className='col-4 my-2 content ' style={{ borderBottom: "5px solid #f0f2f5", cursor: "pointer" }}>
                                                <Link to="/order-processing" style={{ textDecoration: "none", color: "#474141" }}>Tất cả đơn hàng ({dataNumber.allNum})</Link>
                                            </div>
                                            <div className='col-4 content' style={{ borderBottom: "5px solid #f0f2f5", cursor: "pointer" }}>
                                                <Link to="/Manageproducts_No_Pickup" style={{ textDecoration: "none", color: "#474141" }}>Đơn chưa lấy hàng ({dataNumber.no_pick_up})</Link>
                                            </div>
                                            <div className='col-4 content' style={{ borderBottom: "5px solid #f0f2f5", cursor: "pointer" }}>
                                                <Link to="/Manageproducts_Picking" style={{ textDecoration: "none", color: "#474141" }}> Đơn đang lấy hàng ({dataNumber.picking_up})</Link>
                                            </div>
                                            <div className='col-4 content' style={{ borderBottom: "5px solid #f0f2f5", cursor: "pointer" }}>
                                                <Link to="/Manageproducts_pick_ok" style={{ textDecoration: "none", color: "#474141" }}>Đơn đã lấy hàng ({dataNumber.pickupOk})</Link>
                                            </div>
                                            <div className='col-4 content' style={{ borderBottom: "5px solid #f0f2f5", cursor: "pointer" }}>
                                                <Link to="/Manageproducts_No_Warehouse" style={{ textDecoration: "none", color: "#474141" }}> Đơn chưa nhập kho ({dataNumber.no_warehouse})</Link>

                                            </div>
                                            <div className='col-4 content' style={{ backgroundColor: "#61dafb", cursor: "pointer" }}>
                                                Đơn  đã nhập kho ({dataNumber.warehouseStatusOne})

                                            </div>
                                            <div className='col-4 content' style={{ borderBottom: "5px solid #f0f2f5", cursor: "pointer" }}>
                                                <Link to="/Manageproducts_Warehouse_status_two" style={{ textDecoration: "none", color: "#474141" }}>Đơn đã xuất kho ({dataNumber.warehouseStatusTwo}) </Link>

                                            </div>
                                            <div className='col-4 content' style={{ borderBottom: "5px solid #f0f2f5", cursor: "pointer" }}>
                                                <Link to="/Manageproducts_No_delivery" style={{ textDecoration: "none", color: "#474141" }}> Đơn chưa giao hàng ({dataNumber.No_delivery})</Link>

                                            </div>
                                            <div className='col-4 content' style={{ borderBottom: "5px solid #f0f2f5", cursor: "pointer" }}>
                                                <Link to="/Manageproducts_delivery_One" style={{ textDecoration: "none", color: "#474141" }}>Đơn đang giao hàng ({dataNumber.deliveryStatusOne})</Link>

                                            </div>
                                            <div className='col-4 content' style={{ borderBottom: "5px solid #f0f2f5", cursor: "pointer" }}>
                                                <Link to="/Manageproducts_delivery_Two" style={{ textDecoration: "none", color: "#474141" }}>Đơn giao thành công ({dataNumber.delivery_ok})</Link>

                                            </div>
                                            <div className='col-4 content' style={{ borderBottom: "5px solid #f0f2f5", cursor: "pointer" }}>
                                                <Link to="/Manageproducts_delivery_Three" style={{ textDecoration: "none", color: "#474141" }}>Đơn huỷ giao hàng ({dataNumber.delivery_cancel}) </Link>

                                            </div>
                                            <div className='col-4 content' style={{ borderBottom: "5px solid #f0f2f5", cursor: "pointer" }}>
                                                <Link to="/Manageproducts_delivery_Four" style={{ textDecoration: "none", color: "#474141" }}>Đơn giao lại sau ({dataNumber.delivery_again})</Link>

                                            </div>
                                            <div className='col-4 content' style={{ borderBottom: "5px solid #f0f2f5", cursor: "pointer" }}>
                                                {/* <Link to="/listuserbygroupStaff" style={{ textDecoration: "none", color: "#474141" }}>Staff </Link> */}
                                                Đơn đã thanh toán
                                            </div>
                                            <div className='col-4 content' style={{ borderBottom: "5px solid #f0f2f5", cursor: "pointer" }}>
                                                {/* <Link to="/listuserbygroupStaff" style={{ textDecoration: "none", color: "#474141" }}>Staff </Link> */}
                                                Đơn chưa thanh toán
                                            </div>


                                        </div>
                                    </div>
                                </div>

                                <div className='table-wrapper-employer-one'>
                                    <div className='container'>
                                        <div className='title-employer-one my-3'>Đơn hàng trạng thái chưa nhập kho ({listProjectbyUnitLenght})</div>
                                        <hr />
                                        <div className='sub'>
                                            < ReactPaginate
                                                nextLabel="next >"
                                                onPageChange={handlePageClick}
                                                pageRangeDisplayed={2}
                                                marginPagesDisplayed={3}
                                                pageCount={totalPage}
                                                previousLabel="< previous"
                                                pageClassName="page-item"
                                                pageLinkClassName="page-link"
                                                previousClassName="page-item"
                                                previousLinkClassName="page-link"
                                                nextClassName="page-item"
                                                nextLinkClassName="page-link"
                                                breakLabel="..."
                                                breakClassName="page-item"
                                                breakLinkClassName="page-link"
                                                containerClassName="pagination"
                                                activeClassName="active"
                                                renderOnZeroPageCount={null}
                                                forcePage={+currentPage - 1}

                                            />
                                        </div>

                                        <table class="table table-bordered">

                                            <thead>
                                                <tr className='table-secondary'>

                                                    <th scope="col">No</th>
                                                    <th scope="col">id</th>

                                                    <th scope="col">Mã đơn</th>
                                                    <th scope="col">Mặt hàng</th>
                                                    <th scope="col">Số lượng</th>
                                                    <th scope="col">Thời gian tạo</th>
                                                    <th scope="col">Người nhận</th>
                                                    <th scope="col">T/T lấy hàng</th>
                                                    <th scope="col">T/T Nhập kho</th>
                                                    <th scope="col">T/T Giao hàng</th>
                                                    <th scope="col">T/T Thanh toán</th>
                                                    <th scope="col">SĐT người tạo đơn</th>
                                                    <th scope="col">Thao tác</th>


                                                </tr>
                                            </thead>
                                            {listProjectbyUnit && listProjectbyUnit.length > 0
                                                ?
                                                listProjectbyUnit.map((item, index) => {
                                                    return (

                                                        <tbody key={`item-${index}`}>
                                                            <tr class="table-info">


                                                                <td >{(currentPage - 1) * currentLimit + index + 1}</td>
                                                                <td>{item.id}</td>

                                                                <td>{item.order}</td>
                                                                <td> {item?.Warehouse?.product}</td>
                                                                <td>{item.quantity}</td>
                                                                <td>{moment(`${item.createdAt}`).format("DD/MM/YYYY HH:mm:ss")}</td>
                                                                <td> {item?.name_customer}</td>
                                                                <td>
                                                                    <span >
                                                                        {item?.Status_Pickup?.status ? item?.Status_Pickup?.status : "chưa lấy hàng"}
                                                                    </span>
                                                                    <br />
                                                                    {item.User_PickUp && item.Number_PickUp &&
                                                                        <span>Nhân viên :
                                                                            <br />
                                                                            <b>{item.User_PickUp}-{item.Number_PickUp}</b>
                                                                        </span>

                                                                    }


                                                                </td>

                                                                <td>

                                                                    <span style={{ color: "red" }}>
                                                                        {item?.Status_Warehouse?.status ? item?.Status_Warehouse?.status : "chưa xử lý"}
                                                                    </span>
                                                                    <br />
                                                                    {item.User_Warehouse && item.Number_Warehouse
                                                                        &&
                                                                        <span>Nhân viên :
                                                                            <br />
                                                                            <b>{item.User_Warehouse}-{item.Number_Warehouse}</b>
                                                                        </span>

                                                                    }


                                                                </td>
                                                                <td>
                                                                    <span >
                                                                        {item?.Status_Delivery?.status ? item?.Status_Delivery?.status : "chưa giao hàng"}
                                                                    </span>
                                                                    <br />
                                                                    {item.User_Delivery && item.Number_Delivery &&
                                                                        <span>Nhân viên :
                                                                            <br />
                                                                            <b>{item.User_Delivery}-{item.Number_Delivery}</b>
                                                                        </span>

                                                                    }

                                                                </td>
                                                                <td>
                                                                    <span >
                                                                        {item?.Status_Received_money?.status ? item?.Status_Received_money?.status : "chưa thanh toán "}
                                                                    </span>
                                                                    <br />
                                                                    {item.User_Overview && item.Number_Overview &&
                                                                        <span>Nhân viên :
                                                                            <br />
                                                                            <b>{item.User_Overview}-{item.Number_Overview} </b>
                                                                        </span>
                                                                    }
                                                                </td>
                                                                <td>{item.createdBy}</td>
                                                                <td>

                                                                    <span className='mx-2' style={{ color: "blue", cursor: "pointer" }} title='Nhắn tin với Người tạo đơn' onClick={() => handleShowModal(item)}>
                                                                        <i class="fa fa-comments" aria-hidden="true"></i>

                                                                    </span>
                                                                </td>
                                                            </tr>

                                                        </tbody>
                                                    )
                                                })
                                                :
                                                <tr class="table-info">
                                                    <td colSpan={14}>
                                                        <div className='d-flex align-item-center justify-content-center'>

                                                            <h5> Đơn hàng đã được xử lý hết và chưa phát sinh đơn hàng mới</h5>

                                                        </div>

                                                    </td>

                                                </tr>
                                            }

                                        </table>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <ModalChatWithCutomer
                    showModal={showModal}
                    handleShowModal={handleShowModal}
                    dataChatOne={dataChatOne}
                />
            </div >

        </div >




    )


}

export default ManageproductsStatusOne;