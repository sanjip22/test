import React from 'react'
import Nav from './Nav'

function Offer() {
    return (
        <div>
            <Nav/>
            <div class="card-group mt-4" >
  <div class="card">
    <img src="images/keb.jpg" class="card-img-top" alt="..." height="400"/>
    <div class="card-body">
      <h5 class="card-title">Keb jacket</h5>
      <h4 class="card-title">Discount 15% Off</h4>
      <p class="card-text">Price: Rs.3200</p>
    </div>
    <div class="card-footer">
      <small class="text-muted"></small>
    </div>
  </div>
  <div class="card">
    <img src="images/jacket.jpg" class="card-img-top" alt="..." height="400"/>
    <div class="card-body">
      <h5 class="card-title">Trecking jacket</h5>
      <h4 class="card-title">Discount 10% Off</h4>
      <p class="card-text">Price: Rs.3500</p>
    </div>
    <div class="card-footer">
      <small class="text-muted"></small>
    </div>
  </div>
  <div class="card">
    <img src="images/regatta.jpg" class="card-img-top" alt="..." height="400"/>
    <div class="card-body">
      <h5 class="card-title">Hiking jacket</h5>
      <h4 class="card-title">Discount 5% Off</h4>
      <p class="card-text">Price: Rs.3700</p>
    </div>
    <div class="card-footer">
      <small class="text-muted"></small>
    </div>
  </div>
</div>
        </div>
    )
}

export default Offer
