import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link, NavLink, useHistory } from "react-router-dom"
import './modalviewNotification.scss'
import { getAllNotificaltion } from "./services/ProjectService"
import { UserContext } from "../contexApi/UserContext"
import { NotificationContext } from "../contexApi/NotificationContext"

import moment from "moment"


const ModalViewNotification = (props) => {
    let history = useHistory()

    const { show, handleShowNotificationModal } = props
    const { user } = React.useContext(UserContext);
    const { list, getALlListNotification, listStaff } = React.useContext(NotificationContext);


    const handleViewProduct = (item) => {
        history.push(`/detailProduct/${item.ProjectId}`)
        handleShowNotificationModal()
    }

    useEffect(() => {
        getALlListNotification(+user.account.shippingUnit_Id, user.account.phone, user.account.Position)
    }, [show])

    return (
        <>
            <Modal show={show} onHide={handleShowNotificationModal} animation={false} size='lg' >

                <div className='notification-Container'>
                    <div className='container'>
                        <div className='title mb-3'> Thông báo</div>
                        <div className='button mb-3'>
                            <span className='item-One'>Tất cả</span>
                            <span className='item-Two'>Chưa đọc</span>
                        </div>
                        <hr />
                        <div className='content'>
                            <div className='container'>
                                {!user.account.Position && user?.account?.groupWithRound?.name === "Customer" && list && list.length > 0
                                    &&
                                    list.map((item, index) => {
                                        return (
                                            <div>
                                                <div className='notifiaction_content my-3 mx-3 ' key={`item-${index}`}>

                                                    {user?.account?.groupWithRound?.name === "Customer" && item.Change_content === "đơn hàng đang lấy hàng" &&
                                                        <>
                                                            <div onClick={() => handleViewProduct(item)}>

                                                                <span className='mx-3'> Nhân viên <b>{item.ChangeBy}</b> đang đi lấy đơn hàng <b>{item.Order}</b></span>
                                                                <br />
                                                                <span className='time'>
                                                                    {moment(`${item.createdAt}`).format("DD/MM/YYYY HH:mm:ss")}
                                                                </span>
                                                            </div>
                                                            <hr />
                                                        </>

                                                    }
                                                    {user?.account?.groupWithRound?.name === "Customer" && item.Change_content === "đơn hàng đã lấy thành công" &&
                                                        <>

                                                            <div onClick={() => handleViewProduct(item)}>
                                                                <span className='mx-3'>Nhân viên <b>{item.ChangeBy}</b> đã lấy đơn hàng <b>{item.Order}</b> thành công</span>
                                                                <br />
                                                                <span className='time'>
                                                                    {moment(`${item.createdAt}`).format("DD/MM/YYYY HH:mm:ss")}
                                                                </span>
                                                            </div>
                                                            <hr />

                                                        </>

                                                    }
                                                    {user?.account?.groupWithRound?.name === "Customer" && item.Change_content === "đơn hàng trì hoãn" &&
                                                        <>

                                                            <div onClick={() => handleViewProduct(item)}>
                                                                <span className='mx-3'> Delay lấy hàng đơn hàng <b>{item.Order}</b> </span>
                                                                <br />
                                                                <span className='time'>
                                                                    {moment(`${item.createdAt}`).format("DD/MM/YYYY HH:mm:ss")}
                                                                </span>
                                                            </div>
                                                            <hr />

                                                        </>

                                                    }
                                                    {user?.account?.groupWithRound?.name === "Customer" && item.Change_content === "đơn hàng đã nhập kho" &&
                                                        <>

                                                            <div onClick={() => handleViewProduct(item)}>
                                                                <span className='mx-3'>Đơn hàng <b>{item.Order}</b>  đã nhập kho</span>
                                                                <br />
                                                                <span className='time'>
                                                                    {moment(`${item.createdAt}`).format("DD/MM/YYYY HH:mm:ss")}
                                                                </span>
                                                            </div>
                                                            <hr />

                                                        </>

                                                    }
                                                    {user?.account?.groupWithRound?.name === "Customer" && item.Change_content === "nhân viên vừa chat" &&
                                                        <>

                                                            <div onClick={() => handleViewProduct(item)}>
                                                                <span className='mx-3'>Đơn hàng <b>{item.Order}</b> có tin nhắn mới từ {item.ChangeBy}</span>
                                                                <br />
                                                                <span className='time'>
                                                                    {moment(`${item.createdAt}`).format("DD/MM/YYYY HH:mm:ss")}
                                                                </span>
                                                            </div>
                                                            <hr />

                                                        </>

                                                    }
                                                    {user?.account?.groupWithRound?.name === "Customer" && item.Change_content === "đơn hàng trì hoãn nhập kho" &&
                                                        <>

                                                            <div onClick={() => handleViewProduct(item)}>
                                                                <span className='mx-3'>Đơn hàng <b>{item.Order}</b>  trì hoãn nhập kho</span>
                                                                <br />
                                                                <span className='time'>
                                                                    {moment(`${item.createdAt}`).format("DD/MM/YYYY HH:mm:ss")}
                                                                </span>
                                                            </div>
                                                            <hr />

                                                        </>

                                                    }
                                                    {user?.account?.groupWithRound?.name === "Customer" && item.Change_content === "đơn hàng đã xuất kho" &&
                                                        <>

                                                            <div onClick={() => handleViewProduct(item)}>
                                                                <span className='mx-3'>Đơn hàng <b>{item.Order}</b>  đã xuất kho</span>
                                                                <br />
                                                                <span className='time'>
                                                                    {moment(`${item.createdAt}`).format("DD/MM/YYYY HH:mm:ss")}
                                                                </span>
                                                            </div>
                                                            <hr />

                                                        </>

                                                    }
                                                    {user?.account?.groupWithRound?.name === "Customer" && item.Change_content === "đơn hàng đang giao" &&
                                                        <>

                                                            <div onClick={() => handleViewProduct(item)}>
                                                                <span className='mx-3'>Đơn hàng <b>{item.Order}</b>  đang giao hàng</span>
                                                                <br />
                                                                <span className='time'>
                                                                    {moment(`${item.createdAt}`).format("DD/MM/YYYY HH:mm:ss")}
                                                                </span>
                                                            </div>
                                                            <hr />

                                                        </>

                                                    }
                                                    {user?.account?.groupWithRound?.name === "Customer" && item.Change_content === "đơn hàng trì hoãn giao" &&
                                                        <>

                                                            <div onClick={() => handleViewProduct(item)}>
                                                                <span className='mx-3'>Đơn hàng <b>{item.Order}</b>  trì hoãn  giao hàng</span>
                                                                <br />
                                                                <span className='time'>
                                                                    {moment(`${item.createdAt}`).format("DD/MM/YYYY HH:mm:ss")}
                                                                </span>
                                                            </div>
                                                            <hr />

                                                        </>

                                                    }
                                                    {user?.account?.groupWithRound?.name === "Customer" && item.Change_content === "đơn hàng giao xong" &&
                                                        <>

                                                            <div onClick={() => handleViewProduct(item)}>
                                                                <span className='mx-3'>Đơn hàng <b>{item.Order}</b> giao xong</span>
                                                                <br />
                                                                <span className='time'>
                                                                    {moment(`${item.createdAt}`).format("DD/MM/YYYY HH:mm:ss")}
                                                                </span>
                                                            </div>
                                                            <hr />

                                                        </>

                                                    }
                                                    {user?.account?.groupWithRound?.name === "Customer" && item.Change_content === "đơn hàng đang đối soát" &&
                                                        <>

                                                            <div onClick={() => handleViewProduct(item)}>
                                                                <span className='mx-3'>Đơn hàng <b>{item.Order}</b>đang đối soát</span>
                                                                <br />
                                                                <span className='time'>
                                                                    {moment(`${item.createdAt}`).format("DD/MM/YYYY HH:mm:ss")}
                                                                </span>
                                                            </div>
                                                            <hr />

                                                        </>

                                                    }
                                                    {user?.account?.groupWithRound?.name === "Customer" && item.Change_content === "đơn hàng đối soát xong bằng chuyển khoản" &&
                                                        <>

                                                            <div onClick={() => handleViewProduct(item)}>
                                                                <span className='mx-3'>Đơn hàng <b>{item.Order}</b> đối soát hoàn thành</span>
                                                                <br />
                                                                <span className='time'>
                                                                    {moment(`${item.createdAt}`).format("DD/MM/YYYY HH:mm:ss")}
                                                                </span>
                                                            </div>
                                                            <hr />

                                                        </>

                                                    }
                                                    {user?.account?.groupWithRound?.name === "Customer" && item.Change_content === "đơn hàng đối soát xong bằng tiền mặt" &&
                                                        <>

                                                            <div onClick={() => handleViewProduct(item)}>
                                                                <span className='mx-3'>Đơn hàng <b>{item.Order}</b> đối soát hoàn thành</span>
                                                                <br />
                                                                <span className='time'>
                                                                    {moment(`${item.createdAt}`).format("DD/MM/YYYY HH:mm:ss")}
                                                                </span>
                                                            </div>
                                                            <hr />

                                                        </>

                                                    }
                                                    {user?.account?.groupWithRound?.name === "Customer" && item.Change_content === "đơn hàng giao lại" &&
                                                        <>
                                                            <div>
                                                                <span className='mx-3'> Đơn hàng</span><b>{item.Order}</b> giao lại
                                                                <br />
                                                                <span className='time'>
                                                                    {moment(`${item.createdAt}`).format("DD/MM/YYYY HH:mm:ss")}
                                                                </span>
                                                            </div>
                                                            <hr />

                                                        </>
                                                    }
                                                    {user?.account?.groupWithRound?.name === "Customer" && item.Change_content === "đơn hàng hủy giao" &&
                                                        <>
                                                            <div>
                                                                <span className='mx-3'> Đơn hàng</span><b>{item.Order}</b> Giao hàng thất bại
                                                                <br />
                                                                <span className='time'>
                                                                    {moment(`${item.createdAt}`).format("DD/MM/YYYY HH:mm:ss")}
                                                                </span>
                                                            </div>
                                                            <hr />

                                                        </>
                                                    }

                                                </div >
                                            </div>
                                        )
                                    })

                                }

                                {user.account.Position === "Nhân viên lấy hàng" && listStaff && listStaff.length > 0
                                    &&
                                    listStaff.map((item, index) => {
                                        return (

                                            <div>
                                                <div className='notifiaction_content my-3 mx-3 ' key={`item-${index}`}>
                                                    {user.account.Position === "Nhân viên lấy hàng" && item.Change_content === "thêm mới" &&
                                                        <>
                                                            <div>
                                                                <span className='mx-3'> Đơn hàng</span><b>{item.Order}</b> mới được tạo
                                                                <br />
                                                                <span className='time'>
                                                                    {moment(`${item.createdAt}`).format("DD/MM/YYYY HH:mm:ss")}
                                                                </span>
                                                            </div>
                                                            <hr />

                                                        </>
                                                    }
                                                    {user.account.Position === "Nhân viên lấy hàng" && item.Change_content === "thay đổi địa chỉ người bán" &&
                                                        <>
                                                            <div>
                                                                <span className='mx-3'> Đơn hàng</span><b>{item.Order}</b> đã cập nhật địa chỉ lấy hàng bởi người tạo
                                                                <br />
                                                                <span className='time'>
                                                                    {moment(`${item.createdAt}`).format("DD/MM/YYYY HH:mm:ss")}
                                                                </span>
                                                            </div>
                                                            <hr />

                                                        </>
                                                    }
                                                    {user.account.Position === "Nhân viên lấy hàng" && item.Change_content === "người tạo vừa chat" &&
                                                        <>
                                                            <div>
                                                                <span className='mx-3'> Đơn hàng</span><b>{item.Order}</b> vừa có tin nhắn mới từ người tạo đơn
                                                                <br />
                                                                <span className='time'>
                                                                    {moment(`${item.createdAt}`).format("DD/MM/YYYY HH:mm:ss")}
                                                                </span>
                                                            </div>
                                                            <hr />

                                                        </>
                                                    }
                                                    {user.account.Position === "Nhân viên lấy hàng" && item.Change_content === "đơn hàng đang lấy hàng" &&
                                                        <>
                                                            <div>
                                                                <span className='mx-3'> Nhân viên <b>{item.ChangeBy}</b> đang đi lấy đơn đơn hàng</span><b>{item.Order}</b>
                                                                <br />
                                                                <span className='time'>
                                                                    {moment(`${item.createdAt}`).format("DD/MM/YYYY HH:mm:ss")}
                                                                </span>
                                                            </div>
                                                            <hr />

                                                        </>
                                                    }
                                                    {user.account.Position === "Nhân viên lấy hàng" && item.Change_content === "đơn hàng đã lấy thành công" &&
                                                        <>
                                                            <div>
                                                                <span className='mx-3'> Nhân viên <b>{item.ChangeBy}</b> đã lấy đơn đơn hàng</span><b>{item.Order}</b> thành công
                                                                <br />
                                                                <span className='time'>
                                                                    {moment(`${item.createdAt}`).format("DD/MM/YYYY HH:mm:ss")}
                                                                </span>
                                                            </div>
                                                            <hr />

                                                        </>
                                                    }
                                                    {user.account.Position === "Nhân viên lấy hàng" && item.Change_content === "đơn hàng trì hoãn" &&
                                                        <>
                                                            <div>
                                                                <span className='mx-3'> Nhân viên <b>{item.ChangeBy}</b> đã trì hoãn lấy đơn hàng</span><b>{item.Order}</b>
                                                                <br />
                                                                <span className='time'>
                                                                    {moment(`${item.createdAt}`).format("DD/MM/YYYY HH:mm:ss")}
                                                                </span>
                                                            </div>
                                                            <hr />

                                                        </>
                                                    }

                                                    {user.account.Position === "Nhân viên lấy hàng" && item.Change_content === "đơn gấp" &&
                                                        <>
                                                            <div>
                                                                <span className='mx-3'> Đơn hàng</span><b>{item.Order}</b> vừa chuyển trạng thái <b>bình thường</b>  sang <b>gấp</b>
                                                                <br />
                                                                <span className='time'>
                                                                    {moment(`${item.createdAt}`).format("DD/MM/YYYY HH:mm:ss")}
                                                                </span>
                                                            </div>
                                                            <hr />

                                                        </>
                                                    }
                                                    {user.account.Position === "Nhân viên lấy hàng" && item.Change_content === "huỷ đơn gấp" &&
                                                        <>
                                                            <div>
                                                                <span className='mx-3'> Đơn hàng</span><b>{item.Order}</b> vừa chuyển trạng thái <b>gấp</b> sang <b>bình thường</b>
                                                                <br />
                                                                <span className='time'>
                                                                    {moment(`${item.createdAt}`).format("DD/MM/YYYY HH:mm:ss")}
                                                                </span>
                                                            </div>
                                                            <hr />

                                                        </>
                                                    }


                                                </div>
                                            </div >

                                        )
                                    })

                                }
                                {user.account.Position === "Nhân viên kho hàng" && listStaff && listStaff.length > 0
                                    &&
                                    listStaff.map((item, index) => {
                                        return (

                                            <div>
                                                <div className='notifiaction_content my-3 mx-3 ' key={`item-${index}`}>
                                                    {user.account.Position === "Nhân viên kho hàng" && item.Change_content === "đơn hàng đã lấy thành công" &&
                                                        <>
                                                            <div>
                                                                <span className='mx-3'> Đơn hàng</span><b>{item.Order}</b> đã đến kho
                                                                <br />
                                                                <span className='time'>
                                                                    {moment(`${item.createdAt}`).format("DD/MM/YYYY HH:mm:ss")}
                                                                </span>
                                                            </div>
                                                            <hr />

                                                        </>
                                                    }
                                                    {user.account.Position === "Nhân viên kho hàng" && item.Change_content === "đơn gấp" &&
                                                        <>
                                                            <div>
                                                                <span className='mx-3'> Đơn hàng</span><b>{item.Order}</b> đã cập nhật trạng thái từ <b>bình thường </b>sang <b>gấp</b>
                                                                <br />
                                                                <span className='time'>
                                                                    {moment(`${item.createdAt}`).format("DD/MM/YYYY HH:mm:ss")}
                                                                </span>
                                                            </div>
                                                            <hr />

                                                        </>
                                                    }
                                                    {user.account.Position === "Nhân viên kho hàng" && item.Change_content === "huỷ đơn gấp" &&
                                                        <>
                                                            <div>
                                                                <span className='mx-3'> Đơn hàng</span><b>{item.Order}</b> đã cập nhật trạng thái từ <b>gấp</b> sang <b>bình thường</b>
                                                                <br />
                                                                <span className='time'>
                                                                    {moment(`${item.createdAt}`).format("DD/MM/YYYY HH:mm:ss")}
                                                                </span>
                                                            </div>
                                                            <hr />

                                                        </>
                                                    }
                                                    {user.account.Position === "Nhân viên kho hàng" && item.Change_content === "đơn hàng đã nhập kho" &&
                                                        <>
                                                            <div>
                                                                <span className='mx-3'> Nhân viên <b>{item.ChangeBy}</b> đã nhập kho đơn hàng</span><b>{item.Order}</b>
                                                                <br />
                                                                <span className='time'>
                                                                    {moment(`${item.createdAt}`).format("DD/MM/YYYY HH:mm:ss")}
                                                                </span>
                                                            </div>
                                                            <hr />

                                                        </>
                                                    }
                                                    {user.account.Position === "Nhân viên kho hàng" && item.Change_content === "đơn hàng trì hoãn nhập kho" &&
                                                        <>
                                                            <div>
                                                                <span className='mx-3'> Nhân viên <b>{item.ChangeBy}</b> đã trì hoãn nhập kho đơn hàng</span><b>{item.Order}</b>
                                                                <br />
                                                                <span className='time'>
                                                                    {moment(`${item.createdAt}`).format("DD/MM/YYYY HH:mm:ss")}
                                                                </span>
                                                            </div>
                                                            <hr />

                                                        </>
                                                    }
                                                    {user.account.Position === "Nhân viên kho hàng" && item.Change_content === "đơn hàng đã xuất kho" &&
                                                        <>
                                                            <div>
                                                                <span className='mx-3'> Nhân viên <b>{item.ChangeBy}</b> đã xuât kho đơn hàng</span><b>{item.Order}</b>
                                                                <br />
                                                                <span className='time'>
                                                                    {moment(`${item.createdAt}`).format("DD/MM/YYYY HH:mm:ss")}
                                                                </span>
                                                            </div>
                                                            <hr />

                                                        </>
                                                    }
                                                    {user.account.Position === "Nhân viên kho hàng" && item.Change_content === "đơn hàng trì hoãn" &&
                                                        <>
                                                            <div>
                                                                <span className='mx-3'> Đơn hàng</span><b>{item.Order} đã trì hoãn việc lấy hàng</b>
                                                                <br />
                                                                <span className='time'>
                                                                    {moment(`${item.createdAt}`).format("DD/MM/YYYY HH:mm:ss")}
                                                                </span>
                                                            </div>
                                                            <hr />

                                                        </>
                                                    }



                                                </div>
                                            </div >

                                        )
                                    })

                                }
                                {user.account.Position === "Nhân viên giao hàng" && listStaff && listStaff.length > 0
                                    &&
                                    listStaff.map((item, index) => {
                                        return (

                                            <div>
                                                <div className='notifiaction_content my-3 mx-3 ' key={`item-${index}`}>
                                                    {user.account.Position === "Nhân viên giao hàng" && item.Change_content === "đơn hàng đã xuất kho" &&
                                                        <>
                                                            <div>
                                                                <span className='mx-3'> Đơn hàng</span><b>{item.Order}</b> đã xuất kho sẵn sàng giao hàng
                                                                <br />
                                                                <span className='time'>
                                                                    {moment(`${item.createdAt}`).format("DD/MM/YYYY HH:mm:ss")}
                                                                </span>
                                                            </div>
                                                            <hr />

                                                        </>
                                                    }
                                                    {user.account.Position === "Nhân viên giao hàng" && item.Change_content === "đơn gấp" &&
                                                        <>
                                                            <div>
                                                                <span className='mx-3'> Đơn hàng</span><b>{item.Order}</b> đã cập nhật trạng thái từ <b>bình thường </b>sang <b>gấp</b>
                                                                <br />
                                                                <span className='time'>
                                                                    {moment(`${item.createdAt}`).format("DD/MM/YYYY HH:mm:ss")}
                                                                </span>
                                                            </div>
                                                            <hr />

                                                        </>
                                                    }
                                                    {user.account.Position === "Nhân viên giao hàng" && item.Change_content === "huỷ đơn gấp" &&
                                                        <>
                                                            <div>
                                                                <span className='mx-3'> Đơn hàng</span><b>{item.Order}</b> đã cập nhật trạng thái từ <b>gấp</b> sang <b>bình thường</b>
                                                                <br />
                                                                <span className='time'>
                                                                    {moment(`${item.createdAt}`).format("DD/MM/YYYY HH:mm:ss")}
                                                                </span>
                                                            </div>
                                                            <hr />

                                                        </>
                                                    }
                                                    {user.account.Position === "Nhân viên giao hàng" && item.Change_content === "đơn hàng đang giao" &&
                                                        <>
                                                            <div>
                                                                <span className='mx-3'> Nhân viên <b>{item.ChangeBy}</b> đang giao đơn hàng</span><b>{item.Order}</b>
                                                                <br />
                                                                <span className='time'>
                                                                    {moment(`${item.createdAt}`).format("DD/MM/YYYY HH:mm:ss")}
                                                                </span>
                                                            </div>
                                                            <hr />

                                                        </>
                                                    }
                                                    {user.account.Position === "Nhân viên giao hàng" && item.Change_content === "đơn hàng trì hoãn giao" &&
                                                        <>
                                                            <div>
                                                                <span className='mx-3'> Nhân viên <b>{item.ChangeBy}</b> đã trì hoãn nhập giao đơn hàng</span><b>{item.Order}</b>
                                                                <br />
                                                                <span className='time'>
                                                                    {moment(`${item.createdAt}`).format("DD/MM/YYYY HH:mm:ss")}
                                                                </span>
                                                            </div>
                                                            <hr />

                                                        </>
                                                    }
                                                    {user.account.Position === "Nhân viên giao hàng" && item.Change_content === "đơn hàng giao xong" &&
                                                        <>
                                                            <div>
                                                                <span className='mx-3'> Nhân viên <b>{item.ChangeBy}</b> đã xuât kho đơn hàng</span><b>{item.Order}</b>
                                                                <br />
                                                                <span className='time'>
                                                                    {moment(`${item.createdAt}`).format("DD/MM/YYYY HH:mm:ss")}
                                                                </span>
                                                            </div>
                                                            <hr />

                                                        </>
                                                    }
                                                    {user.account.Position === "Nhân viên giao hàng" && item.Change_content === "đơn hàng giao lại" &&
                                                        <>
                                                            <div>
                                                                <span className='mx-3'> Người nhận yêu cầu đơn hàng</span><b>{item.Order}</b> giao lại
                                                                <br />
                                                                <span className='time'>
                                                                    {moment(`${item.createdAt}`).format("DD/MM/YYYY HH:mm:ss")}
                                                                </span>
                                                            </div>
                                                            <hr />

                                                        </>
                                                    }

                                                    {user.account.Position === "Nhân viên giao hàng" && item.Change_content === "người tạo vừa chat" &&
                                                        <>
                                                            <div>
                                                                <span className='mx-3'> Đơn hàng</span><b>{item.Order}</b> vừa có tin nhắn mới từ người tạo đơn
                                                                <br />
                                                                <span className='time'>
                                                                    {moment(`${item.createdAt}`).format("DD/MM/YYYY HH:mm:ss")}
                                                                </span>
                                                            </div>
                                                            <hr />

                                                        </>
                                                    }
                                                    {user.account.Position === "Nhân viên giao hàng" && item.Change_content === "đơn hàng hủy giao" &&
                                                        <>
                                                            <div>
                                                                <span className='mx-3'> Đơn hàng</span><b>{item.Order}</b> Giao hàng thất bại
                                                                <br />
                                                                <span className='time'>
                                                                    {moment(`${item.createdAt}`).format("DD/MM/YYYY HH:mm:ss")}
                                                                </span>
                                                            </div>
                                                            <hr />

                                                        </>
                                                    }

                                                </div>
                                            </div >

                                        )
                                    })

                                }
                                {user.account.Position === "Nhân viên kế toán" && user?.account?.groupWithRound?.name === "Staff" && listStaff && listStaff.length > 0
                                    &&
                                    listStaff.map((item, index) => {
                                        return (

                                            <div>
                                                <div className='notifiaction_content my-3 mx-3 ' key={`item-${index}`}>
                                                    {user?.account?.groupWithRound?.name === "Staff" && user.account.Position === "Nhân viên kế toán" && item.Change_content === "đơn hàng giao xong" &&
                                                        <>
                                                            <div>
                                                                <span className='mx-3'> Đơn hàng</span><b>{item.Order}</b> đang chờ đối soát
                                                                <br />
                                                                <span className='time'>
                                                                    {moment(`${item.createdAt}`).format("DD/MM/YYYY HH:mm:ss")}
                                                                </span>
                                                            </div>
                                                            <hr />

                                                        </>
                                                    }
                                                    {user?.account?.groupWithRound?.name === "Staff" && user.account.Position === "Nhân viên kế toán" && item.Change_content === "đơn hàng đang đối soát" &&
                                                        <>
                                                            <div>
                                                                <span className='mx-3'> Nhân viên <b>{item.ChangeBy}</b> đang đối soát đơn hàng</span><b>{item.Order}</b>
                                                                <br />
                                                                <span className='time'>
                                                                    {moment(`${item.createdAt}`).format("DD/MM/YYYY HH:mm:ss")}
                                                                </span>
                                                            </div>
                                                            <hr />

                                                        </>
                                                    }
                                                    {user?.account?.groupWithRound?.name === "Staff" && user.account.Position === "Nhân viên kế toán" && item.Change_content === "đơn hàng đối soát xong bằng chuyển khoản" &&
                                                        <>
                                                            <div>
                                                                <span className='mx-3'> Nhân viên <b>{item.ChangeBy}</b> đã đối soát xong đơn hàng</span><b>{item.Order}</b>
                                                                <br />
                                                                <span className='time'>
                                                                    {moment(`${item.createdAt}`).format("DD/MM/YYYY HH:mm:ss")}
                                                                </span>
                                                            </div>
                                                            <hr />

                                                        </>
                                                    }
                                                    {user?.account?.groupWithRound?.name === "Staff" && user.account.Position === "Nhân viên kế toán" && item.Change_content === "đơn hàng đối soát xong bằng tiền mặt" &&
                                                        <>
                                                            <div>
                                                                <span className='mx-3'> Nhân viên <b>{item.ChangeBy}</b> đã đối soát xong đơn hàng</span><b>{item.Order}</b>
                                                                <br />
                                                                <span className='time'>
                                                                    {moment(`${item.createdAt}`).format("DD/MM/YYYY HH:mm:ss")}
                                                                </span>
                                                            </div>
                                                            <hr />

                                                        </>
                                                    }
                                                    {user?.account?.groupWithRound?.name === "Staff" && user.account.Position === "Nhân viên kế toán" && item.Change_content === "thay đổi thông tin đơn hàng" &&
                                                        <>
                                                            <div>
                                                                <span className='mx-3'>  Đơn hàng</span><b>{item.Order} </b> đã cập nhật thông tin đối soát
                                                                <br />
                                                                <span className='time'>
                                                                    {moment(`${item.createdAt}`).format("DD/MM/YYYY HH:mm:ss")}
                                                                </span>
                                                            </div>
                                                            <hr />

                                                        </>
                                                    }
                                                </div>
                                            </div >

                                        )
                                    })

                                }

                            </div >
                        </div >

                    </div>
                </div >

            </Modal >
        </>
    );
}

export default ModalViewNotification;