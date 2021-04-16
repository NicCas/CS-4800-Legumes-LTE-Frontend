import React from 'react'
import Whirligig from 'react-whirligig'
import Card from 'react-bootstrap/Card'
import "./Carousel.css";
import item from "../assets/item_placeholder.png";
import leftA from "../assets/left_arrow.png";
import rightA from "../assets/right_arrow.png";

const TestC = () => {
    let whirligig1
    let whirligig2
    const next1 = () => whirligig1.next()
    const prev1 = () => whirligig1.prev()
    const buy = () => whirligig1.next() //Filler for now to get the button to stop throwing errors
    const next2 = () => whirligig2.next()
    const prev2 = () => whirligig2.prev()
  
    return (
      <div id="TestC-page"> 
        <div class="row">
            <h1>Category</h1>
        </div>
        <div class="row">
            
                <button class="button" onClick={prev1}><img src={leftA} alt="Prev" width="30" height="30" /></button>
                <button class="button" onClick={next1}><img src={rightA} alt="Next" width="30" height="30" /></button>

            <Whirligig
            visibleSlides={4}
            gutter="1em"

            ref={(_whirligigInstance1) => { whirligig1 = _whirligigInstance1}}
            >
                <Card style={{ width: '18rem' }}>   
                    <Card.Img 
                        variant="top" 
                        id="item-icon" 
                        src={item} 
                        alt="Placeholder Item Picture" 
                        
                    />
                    <Card.Body>
                        <Card.Title>Item Name</Card.Title>

                        <Card.Text>
                            $ Price
                        </Card.Text>

                        <button onClick={buy}>Buy</button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Stock #</small>
                    </Card.Footer>    
                </Card>

                <Card style={{ width: '18rem' }}>   
                    <Card.Img 
                        variant="top" 
                        id="item-icon" 
                        src={item} 
                        alt="Placeholder Item Picture" 
                        
                    />
                    <Card.Body>
                        <Card.Title>Item Name</Card.Title>

                        <Card.Text>
                            $ Price
                        </Card.Text>

                        <button onClick={buy}>Buy</button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Stock #</small>
                    </Card.Footer>    
                </Card>

                <Card style={{ width: '18rem' }}>   
                    <Card.Img 
                        variant="top" 
                        id="item-icon" 
                        src={item} 
                        alt="Placeholder Item Picture" 
                    />
                    <Card.Body>
                        <Card.Title>Item Name</Card.Title>

                        <Card.Text>
                            $ Price
                        </Card.Text>

                        <button onClick={buy}>Buy</button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Stock #</small>
                    </Card.Footer>    
                </Card>

                <Card style={{ width: '18rem' }}>   
                    <Card.Img 
                        variant="top" 
                        id="item-icon" 
                        src={item} 
                        alt="Placeholder Item Picture" 
                    />
                    <Card.Body>
                        <Card.Title>Item Name</Card.Title>

                        <Card.Text>
                            $ Price
                        </Card.Text>

                        <button onClick={buy}>Buy</button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Stock #</small>
                    </Card.Footer>    
                </Card>

                <Card style={{ width: '18rem' }}>   
                    <Card.Img 
                        variant="top" 
                        id="item-icon" 
                        src={item} 
                        alt="Placeholder Item Picture" 
                    />
                    <Card.Body>
                        <Card.Title>Item Name</Card.Title>

                        <Card.Text>
                            $ Price
                        </Card.Text>

                        <button onClick={buy}>Buy</button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Stock #</small>
                    </Card.Footer>    
                </Card>

                <Card style={{ width: '18rem' }}>   
                    <Card.Img 
                        variant="top" 
                        id="item-icon" 
                        src={item} 
                        alt="Placeholder Item Picture" 
                    />
                    <Card.Body>
                        <Card.Title>Item Name</Card.Title>

                        <Card.Text>
                            $ Price
                        </Card.Text>

                        <button onClick={buy}>Buy</button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Stock #</small>
                    </Card.Footer>    
                </Card>

                <Card style={{ width: '18rem' }}>   
                    <Card.Img 
                        variant="top" 
                        id="item-icon" 
                        src={item} 
                        alt="Placeholder Item Picture" 
                    />
                    <Card.Body>
                        <Card.Title>Item Name</Card.Title>

                        <Card.Text>
                            $ Price
                        </Card.Text>

                        <button onClick={buy}>Buy</button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Stock #</small>
                    </Card.Footer>    
                </Card>

                <Card style={{ width: '18rem' }}>   
                    <Card.Img 
                        variant="top" 
                        id="item-icon" 
                        src={item} 
                        alt="Placeholder Item Picture" 
                    />
                    <Card.Body>
                        <Card.Title>Item Name</Card.Title>

                        <Card.Text>
                            $ Price
                        </Card.Text>

                        <button onClick={buy}>Buy</button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Stock #</small>
                    </Card.Footer>    
                </Card>

                <Card style={{ width: '18rem' }}>   
                    <Card.Img 
                        variant="top" 
                        id="item-icon" 
                        src={item} 
                        alt="Placeholder Item Picture" 
                    />
                    <Card.Body>
                        <Card.Title>Item Name</Card.Title>

                        <Card.Text>
                            $ Price
                        </Card.Text>

                        <button onClick={buy}>Buy</button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Stock #</small>
                    </Card.Footer>    
                </Card>
            </Whirligig>

           
        </div>
        
        
        <div class="row">
            <h1>Category</h1>
        </div>
        <div class="row">
    
            <button class="button" onClick={prev2}><img src={leftA} alt="Prev" width="30" height="30" /></button>
            <button class="button" onClick={next2}><img src={rightA} alt="Next" width="30" height="30" /></button>

            <Whirligig
            visibleSlides={4}
            gutter="1em"
            ref={(_whirligigInstance2) => { whirligig2 = _whirligigInstance2}}
            >
                <Card style={{ width: '18rem' }}>   
                    <Card.Img 
                        variant="top" 
                        id="item-icon" 
                        src={item} 
                        alt="Placeholder Item Picture" 
                    />
                    <Card.Body>
                        <Card.Title>Item Name</Card.Title>

                        <Card.Text>
                            $ Price
                        </Card.Text>

                        <button onClick={buy}>Buy</button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Stock #</small>
                    </Card.Footer>    
                </Card>

                <Card style={{ width: '18rem' }}>   
                    <Card.Img 
                        variant="top" 
                        id="item-icon" 
                        src={item} 
                        alt="Placeholder Item Picture" 
                    />
                    <Card.Body>
                        <Card.Title>Item Name</Card.Title>

                        <Card.Text>
                            $ Price
                        </Card.Text>

                        <button onClick={buy}>Buy</button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Stock #</small>
                    </Card.Footer>    
                </Card>

                <Card style={{ width: '18rem' }}>   
                    <Card.Img 
                        variant="top" 
                        id="item-icon" 
                        src={item} 
                        alt="Placeholder Item Picture" 
                    />
                    <Card.Body>
                        <Card.Title>Item Name</Card.Title>

                        <Card.Text>
                            $ Price
                        </Card.Text>

                        <button onClick={buy}>Buy</button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Stock #</small>
                    </Card.Footer>    
                </Card>

                <Card style={{ width: '18rem' }}>   
                    <Card.Img 
                        variant="top" 
                        id="item-icon" 
                        src={item} 
                        alt="Placeholder Item Picture" 
                    />
                    <Card.Body>
                        <Card.Title>Item Name</Card.Title>

                        <Card.Text>
                            $ Price
                        </Card.Text>

                        <button onClick={buy}>Buy</button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Stock #</small>
                    </Card.Footer>    
                </Card>

                <Card style={{ width: '18rem' }}>   
                    <Card.Img 
                        variant="top" 
                        id="item-icon" 
                        src={item} 
                        alt="Placeholder Item Picture" 
                    />
                    <Card.Body>
                        <Card.Title>Item Name</Card.Title>

                        <Card.Text>
                            $ Price
                        </Card.Text>

                        <button onClick={buy}>Buy</button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Stock #</small>
                    </Card.Footer>    
                </Card>

                <Card style={{ width: '18rem' }}>   
                    <Card.Img 
                        variant="top" 
                        id="item-icon" 
                        src={item} 
                        alt="Placeholder Item Picture" 
                    />
                    <Card.Body>
                        <Card.Title>Item Name</Card.Title>

                        <Card.Text>
                            $ Price
                        </Card.Text>

                        <button onClick={buy}>Buy</button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Stock #</small>
                    </Card.Footer>    
                </Card>

                <Card style={{ width: '18rem' }}>   
                    <Card.Img 
                        variant="top" 
                        id="item-icon" 
                        src={item} 
                        alt="Placeholder Item Picture" 
                    />
                    <Card.Body>
                        <Card.Title>Item Name</Card.Title>

                        <Card.Text>
                            $ Price
                        </Card.Text>

                        <button onClick={buy}>Buy</button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Stock #</small>
                    </Card.Footer>    
                </Card>

                <Card style={{ width: '18rem' }}>   
                    <Card.Img 
                        variant="top" 
                        id="item-icon" 
                        src={item} 
                        alt="Placeholder Item Picture" 
                    />
                    <Card.Body>
                        <Card.Title>Item Name</Card.Title>

                        <Card.Text>
                            $ Price
                        </Card.Text>

                        <button onClick={buy}>Buy</button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Stock #</small>
                    </Card.Footer>    
                </Card>

                <Card style={{ width: '18rem' }}>   
                    <Card.Img 
                        variant="top" 
                        id="item-icon" 
                        src={item} 
                        alt="Placeholder Item Picture" 
                    />
                    <Card.Body>
                        <Card.Title>Item Name</Card.Title>

                        <Card.Text>
                            $ Price
                        </Card.Text>

                        <button onClick={buy}>Buy</button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Stock #</small>
                    </Card.Footer>    
                </Card>
            </Whirligig>
            
        </div>
        
      </div>
        
    )
}

export default TestC;