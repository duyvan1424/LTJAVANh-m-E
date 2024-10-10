import { useState } from 'react';
import '../styles/PhieuCheckNv.css';

const PhieuCheckNv = () => {
    const ConfirmationForm = () => {
        const [isDragging, setIsDragging] = useState(false);
        const [startX, setStartX] = useState(0);
        const [sliderLeft, setSliderLeft] = useState(0);
        const sliderRef = React.createRef();
        const sliderContainerRef = React.createRef();
        const totalFeeRef = React.createRef();

        const handleMouseDown = (e) => {
            setIsDragging(true);
            setStartX(e.clientX);
            setSliderLeft(sliderRef.current.offsetLeft);
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        };

        const onMouseMove = (e) => {
            if (!isDragging) return;
            let newLeft = sliderLeft + (e.clientX - startX);
            if (newLeft < 0) newLeft = 0;
            if (newLeft > sliderContainerRef.current.offsetWidth - sliderRef.current.offsetWidth) {
                newLeft = sliderContainerRef.current.offsetWidth - sliderRef.current.offsetWidth;
                sliderContainerRef.current.classList.add('active');
                console.log('Nút đã được kéo sang phải!');
            } else {
                sliderContainerRef.current.classList.remove('active');
            }
            sliderRef.current.style.left = newLeft + 'px';
        };

        const onMouseUp = () => {
            setIsDragging(false);
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };

        const handleDeliveryServiceChange = () => {
            const deliveryServiceCheckbox = document.getElementById('delivery-service');
            const totalFeeInput = totalFeeRef.current;
            if (deliveryServiceCheckbox.checked) {
                totalFeeInput.value = '50000';
            } else {
                totalFeeInput.value = '';
            }
        };

        return (
            <>
                <div className="container"></div>

                <div className="form-container">
                    <h1>Thông tin gửi hàng cá koi</h1>
                    <form action="#" method="post">
                        {/* Form fields here */}
                        <label htmlFor="comfim-button">Kéo qua phải để xác nhận:</label>
                        <div className="slider-container" ref={sliderContainerRef}>
                            <div className="slider" ref={sliderRef} onMouseDown={handleMouseDown}></div>
                        </div>

                        <input type="submit" value="Gửi thông tin" />
                    </form>
                </div>
            </>
        );
    };

    return <ConfirmationForm />;
};

export default PhieuCheckNv;