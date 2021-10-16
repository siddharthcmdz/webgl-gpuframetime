import * as THREE from 'three'
import 'stats.js'

const render = () => {
    const canvas = document.querySelector('#c');
    const renderer = new THREE.WebGLRenderer({canvas});
    
    const fov = 75;
    const aspect = 2;  // the canvas default
    const near = 0.1;
    const far = 5;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 2;
    
    const scene = new THREE.Scene();
    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
    
    const material = new THREE.MeshBasicMaterial({color: 0x44aa88});  // greenish blue
    
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    function resizeRendererToDisplaySize(renderer) {
        const canvas = renderer.domElement;
        const pixelRatio = window.devicePixelRatio;
        const width  = canvas.clientWidth  * pixelRatio | 0;
        const height = canvas.clientHeight * pixelRatio | 0;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
          renderer.setSize(width, height, false);
        }
        return needResize;    }

    let gl = canvas.getContext('webgl2');
    if(gl == null)
    {
        gl = canvas.getContext('webgl');
    }
    
    console.log(gl);
    let ext = gl.getExtension('EXT_disjoint_timer_query_webgl2');
    console.log(ext)
    console.log(window)

    let stats = new stats_js__WEBPACK_IMPORTED_MODULE_0__()
    console.log(stats)
    stats.showPanel(3);
    let queryPanel = stats.addPanel( new stats_js__WEBPACK_IMPORTED_MODULE_0__.Panel( 'ms', '#ff8', '#221' ) );
    document.body.appendChild(stats.dom);

    let availability_retry = 500
    let elapsed_query = gl.createQuery()
    let enableQueryOnce = true
    let lastQueryResult = 0
    // function checkQueryResults() {

    //     console.log('checkQueryResults')
    //     if (query) {
    //         let available = gl.getQueryParameter(query, gl.QUERY_RESULT_AVAILABLE);
    //         let disjoint = gl.getParameter(ext.GPU_DISJOINT_EXT);
  
    //         if (available && !disjoint) {
    //           // See how much time the rendering of the object took in nanoseconds.
    //           let timeElapsed = gl.getQueryParameter(query, gl.QUERY_RESULT);
  
    //           // Do something useful with the time.  Note that care should be
    //           // taken to use all significant bits of the result, not just the
    //           // least significant 32 bits.
    //           console.log(timeElapsed);
    //         }
  
    //         if (available || disjoint) {
    //           // Clean up the query object.
    //           gl.deleteQuery(query);
    //           // Don't re-enter this polling loop.
    //           query = null;
    //         }
    //       }
    // }

    function checkQueryResults() {
        if (availability_retry > 0) {
            // Make a reasonable attempt to wait for the queries' results to become available.
            if (!gl.getQueryParameter(elapsed_query, gl.QUERY_RESULT_AVAILABLE)) {
                let error = gl.getError();
                if (error != gl.NO_ERROR) {
                    console.log("getQueryParameter should have no errors: " +error);
                    return;
                }
                availability_retry--;
                window.requestAnimationFrame(checkQueryResults);
                return;
            }
        }
    
        let disjoint_value = gl.getParameter(ext.GPU_DISJOINT_EXT);
        let available = gl.getQueryParameter(elapsed_query, gl.QUERY_RESULT_AVAILABLE);
        if(!available)
            return;

        if (disjoint_value) {
            // Cannot validate results make sense, but this is okay.
            console.log("Disjoint triggered.");
        } else {
            let elapsed_result = gl.getQueryParameter(elapsed_query, gl.QUERY_RESULT);
            if(elapsed_result > 0) {
                enableQueryOnce = true
                let toms =  elapsed_result/1000
                lastQueryResult = toms
                console.log(toms)
            }
        }        
    }

    function renderQueryEx1(time) {
        stats.begin()

        if(enableQueryOnce) {
            gl.beginQuery(ext.TIME_ELAPSED_EXT, elapsed_query);
        }

        time *= 0.001;  // convert time to seconds
    
        cube.rotation.x = time;
        cube.rotation.y = time;
        if (resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
        }

        renderer.render(scene, camera);
        if(enableQueryOnce)
        {
            gl.endQuery(ext.TIME_ELAPSED_EXT);
            enableQueryOnce = false;
        }
        
        stats.end()
        queryPanel.update( lastQueryResult, 400 );

        requestAnimationFrame(renderQueryEx1);
        window.requestAnimationFrame(checkQueryResults)
    }
    requestAnimationFrame(renderQueryEx1);
}

render()
