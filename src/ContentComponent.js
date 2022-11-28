import { Link } from "react-router-dom";
// import { Link } from 'react-router';

function ContentComponent1() {

    return <div id="article" className="row justify-content-center pb-4">
        <div className="col-9 ">
            <div className="h-25 row">
                <div className="d-flex flex-row font-small align-items-center">
                    <div><img src="img-2.png" alt="..." /></div>
                    <div>
                        <p className="m-0 p-1">
                            <b id="author-name">Authors name</b> <small className="text-muted">in</small>
                            <b id="topic-name">Topics Name</b>7 july <small className="text-muted" id="article-date"></small>
                        </p>
                    </div>
                </div>
            </div>
            <div className="h-25 row">
                <Link to="/pagecomponent">
                    <h1 id="title">7 Practical CSS Tips</h1>
                </Link>
            </div>
            <div className="h-25 row">
                <p className="col-10 desription" id="description">You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.</p>
            </div>
            <div className="h-25 row">
                <div className="col-6 font-small d-flex justify-content-between align-items-end">
                    <button className="javascript">JavaScript</button>
                    <small id="time-to-read" className="text-muted">12 min read</small>
                    <b>·</b>
                    <small className="text-muted">Selected for you</small>
                </div>
                <div className="col-5 d-flex align-items-end flex-row-reverse">
                    <div id="icon"><img src="Icon.png" alt="..." /></div>
                    <div id="icon"><img src="Icon.png" alt="..." /></div>
                    <div id="icon"><img src="Icon.png" alt="..." /></div>
                </div>
            </div>
        </div>
        <div className="col-3">
            <img id="article-img" className="img-fluid" alt="..." src='Img.png' />
        </div>
        <hr />
    </div >
};

function ContentComponent2() {

    return <div id="article" className="row justify-content-center pb-4">
        <div className="col-9 ">
            <div className="h-25 row">
                <div className="d-flex flex-row font-small align-items-center">
                    <div><img src="img-2.png" alt="..." /></div>
                    <div>
                        <p className="m-0 p-1">
                            <b id="author-name">Authors name</b> <small className="text-muted">in</small>
                            <b id="topic-name">Topics Name</b>7 july <small className="text-muted" id="article-date"></small>
                        </p>
                    </div>
                </div>
            </div>
            <div className="h-25 row">
                <h1 id="title">7 Practical CSS Tips</h1>
            </div>
            <div className="h-25 row">
                <p className="col-10 desription" id="description">Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced.
                    You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...</p>
            </div>
            <div className="h-25 row">
                <div className="col-6 font-small d-flex justify-content-between align-items-end">
                    <button className="javascript">JavaScript</button>
                    <small id="time-to-read" className="text-muted">12 min read</small>
                    <b>·</b>
                    <small className="text-muted">Selected for you</small>
                </div>
                <div className="col-5 d-flex align-items-end flex-row-reverse">
                    <div id="icon"><img src="Icon.png" alt="..." /></div>
                    <div id="icon"><img src="Icon.png" alt="..." /></div>
                    <div id="icon"><img src="Icon.png" alt="..." /></div>
                </div>
            </div>
        </div>
        <div className="col-3">
            <img id="article-img" className="img-fluid" alt="..." src='Img-6.png' />
        </div>
        <hr />
    </div >
};

function ContentComponent3() {

    return <div id="article" className="row justify-content-center pb-4">
        <div className="col-9 ">
            <div className="h-25 row">
                <div className="d-flex flex-row font-small align-items-center">
                    <div><img src="img-2.png" alt="..." /></div>
                    <div>
                        <p className="m-0 p-1">
                            <b id="author-name">Authors name</b> <small className="text-muted">in</small>
                            <b id="topic-name">Topics Name</b>7 july <small className="text-muted" id="article-date"></small>
                        </p>
                    </div>
                </div>
            </div>
            <div className="h-25 row">
                <h1 id="title">7 Practical CSS Tips</h1>
            </div>
            <div className="h-25 row">
                <p className="col-10 desription" id="description">Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced.
                    You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...</p>
            </div>
            <div className="h-25 row">
                <div className="col-6 font-small d-flex justify-content-between align-items-end">
                    <button className="javascript">JavaScript</button>
                    <small id="time-to-read" className="text-muted">12 min read</small>
                    <b>·</b>
                    <small className="text-muted">Selected for you</small>
                </div>
                <div className="col-5 d-flex align-items-end flex-row-reverse">
                    <div id="icon"><img src="Icon.png" alt="..." /></div>
                    <div id="icon"><img src="Icon.png" alt="..." /></div>
                    <div id="icon"><img src="Icon.png" alt="..." /></div>
                </div>
            </div>
        </div>
        <div className="col-3">
            <img id="article-img" className="img-fluid" alt="..." src='Img-5.png' />
        </div>
        <hr />
    </div >
};
export { ContentComponent1, ContentComponent2, ContentComponent3 };