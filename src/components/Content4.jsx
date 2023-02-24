import React from "react";
import "../style/Content4.css";

const Content4 = () => {
  return (
    <div className="content4">
      <div className="main">
        <div className="box box1">
          <div className="top">
            <i class="fa-sharp fa-solid fa-play fa-2x"> </i>
            <div className="heading">What We Do</div>
          </div>

          <div className="bottom">
            {/* Alexis Enterprise is currently operational in Land Transport,
            Removals services and Shipping and postage services. We use powerful
            logistics tools to make tracking easier and make things work
            efficiently. We are all equally committed to deliver the service
            that we commit. */}
            Alexis Enterprise is a logistics company that offers a range of
            services, including land transport, removals, shipping and postage,
            and last mile delivery. We use advanced tools to efficiently track
            and manage our operations and are dedicated to delivering
            high-quality services to our clients
          </div>
        </div>

        <div className="box box2">
          <div className="top">
            <i class="fa-sharp fa-solid fa-play fa-2x"> </i>
            <div className="heading">Why We Do It Better</div>
          </div>

          <div className="bottom">
            Success doesn’t come easy! What contributes to you growth is your
            dedication and this is what makes us stand out the crowd. We are in
            this logistic business because we love doing it every day. You’ll be
            relaxed as WE WELCOME YOU ONBOARD.
          </div>
        </div>

        <div className="box box3">
          <div className="top">
            <i class="fa-sharp fa-solid fa-play fa-2x"> </i>
            <div className="heading">How We Succeed</div>
          </div>

          <div className="bottom">
            We support from micro business and SMEs to large-scale enterprises,
            bringing all level of logistic services under same roof. We
            understand your requirement and customize our services accordingly,
            and that’s how we progress.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content4;
