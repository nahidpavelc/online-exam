import React from "react";

const Cover = () => {
  return (
    <>
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-6">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div class="col-md-6">
            <img
              src="http://bhaters.abrms.com/uploads/system/b8af129d0f9301a950a335817e117581.jpg"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <script type="text/javascript">
            var border_bottom = $('.home-banner-wrap').height() + 242;
            $('.cropped-home-banner').css('border-bottom', border_bottom + 'px
            solid #f1f7f8'); mRight = Number("1.6495601173021") *
            $('.home-banner-area').outerHeight();
            $('.cropped-home-banner').css('right', (mRight-65) + 'px');
          </script>
        </div>
      </div>
    </>
  );
};

export default Cover;
