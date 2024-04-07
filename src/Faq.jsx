import * as React from 'react';
import './faq.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'; // Import arrow up and arrow down icons


export default function AccordionExpandIcon() {
  return (
      <div className='main-accordion-container'>
          <span className='faq-title'>frequently asked questions</span>
          <div className='accordion-container'>
      <Accordion className='accordion'>
        <AccordionSummary
          expandIcon={ <FaArrowDown />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <span>How long do you need the presale to go?</span>
        </AccordionSummary>
        <AccordionDetails className='answer'>
          <Typography>
          It depends on you and the platform you choose.
          </Typography>
        </AccordionDetails>
              </Accordion>
              
      <Accordion className='accordion'>
        <AccordionSummary
          expandIcon={<FaArrowDown />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <span>Do you want the whole total supply to be on presale? //No just a portion like 15%</span>
        </AccordionSummary>
        <AccordionDetails className='answer'>
          <Typography>
          The portion for the presale is mentioned in the token distribution which is 25%.
          </Typography>
        </AccordionDetails>
              </Accordion>
              
              <Accordion className='accordion'>
        <AccordionSummary
          expandIcon={<FaArrowDown />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <span>Is there a way to do an ICO to give security to investors that security that if the ICO is canceled their tokens get automatically returned?</span>
        </AccordionSummary>
        <AccordionDetails className='answer'>
          <Typography>
                          It is mostly offered by the platform for the pre-sale.
                      </Typography>
        </AccordionDetails>
              </Accordion>
              
              <Accordion className='accordion'>
        <AccordionSummary
          expandIcon={<FaArrowDown />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <span>Will you provide the investors with their tokens immediately on purchase or after presale?</span>
        </AccordionSummary>
        <AccordionDetails className='answer'>
          <Typography>
                          It is done by the pre-sale platform. Tokens are transferred when the pre-sale is done.
                      </Typography>
        </AccordionDetails>
              </Accordion> 
              
              <Accordion className='accordion'>
        <AccordionSummary
          expandIcon={<FaArrowDown />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
                      <span>
                      How are we going to offer the staking rewards what is the staking rewards pool, how much reward do we give, and how to track the rewards?                          
          </span>
        </AccordionSummary>
        <AccordionDetails className='answer'>
          <Typography>
                          The staking reward will be offered through part of the token supply. (Community Operations & Rewards 05%).
                      </Typography>
        </AccordionDetails>
              </Accordion>
              
              <Accordion className='accordion'>
        <AccordionSummary
          expandIcon={<FaArrowDown />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
                      <span>
                      After every presale stage, the price will increase a little bit. So, I need prices and goals for every single presale stage before the presale, let me know          </span>
        </AccordionSummary>
        <AccordionDetails className='answer'>
          <Typography>
                          You will need a proper advisor for this.
                      </Typography>
        </AccordionDetails>
              </Accordion>
              
              <Accordion className='accordion'>
        <AccordionSummary
          expandIcon={<FaArrowDown />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
                      <span>
                          Referral - Users should be able to generate a unique referral link and earn _____% USDT reward if someone purchases via their link //Need from client      </span>
                  </AccordionSummary>
        <AccordionDetails className='answer'>
          <Typography>
                          This is offered by most of the Pre-Sale platforms.
                      </Typography>
        </AccordionDetails>
      </Accordion>
          </div>
          </div>
  );
}