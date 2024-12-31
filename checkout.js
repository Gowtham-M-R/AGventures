const crypto = require('crypto');
const express = require('express');
const app = express();

app.use(express.json());


const secret = 'g39GuEJen6fSJ2ThCdxEaPyK';

app.post('/verify-signature', (req, res) => {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;

    
    const generated_signature = crypto.createHmac('sha256', secret)
                                       .update(razorpay_order_id + "|" + razorpay_payment_id)
                                       .digest('hex');

    
    if (generated_signature === razorpay_signature) {
        
        res.json({ success: true, message: 'Payment verified successfully!' });
    } else {
      
        res.json({ success: false, message: 'Payment verification failed!' });
    }
});


app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
