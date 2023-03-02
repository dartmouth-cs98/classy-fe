/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Link from 'next/link';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import {
  B1,
  TextLabel,
} from '../ui/typography';
import getColor from '../../data/colorscheme';
import styles from '../../styles/components/ProfWaitlistTable.module.css';
import { updatePriority } from '../../actions';

function Row(props) {
  const {
    waitlist, tableType, courseId, spot, dept, num, i,
  } = props;
  const [open, setOpen] = React.useState(false);
  const [priority, setPriority] = React.useState(spot === 'PRIORITY');
  const studentId = waitlist?._id;
  const dispatch = useDispatch();
  //   const course = useSelector((reduxState) => reduxState.waitlist.current);

  const findReasoning = () => {
    for (const reason of waitlist.waitlistReasons) {
      if (reason.course === courseId) {
        return reason.reason;
      }
    }
    return '';
  };
  const prioritize = (event) => {
    event.preventDefault();
    setPriority(!priority);
    dispatch(updatePriority(dept, num, i, studentId, priority));
  };

  console.log('row', waitlist);

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        {tableType === 'profInfo' ? (
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
            </IconButton>
          </TableCell>
        ) : (
          <TableCell />
        )}
        <TableCell component="th" scope="row">
          {priority ? <strong>PRIORITY</strong> : spot}
        </TableCell>
        <TableCell align="left">{`${waitlist?.user?.firstName} ${waitlist?.user?.lastName}`}</TableCell>
        <TableCell align="left">
          <Link
            href={`mailto: ${waitlist?.user?.email}?subject=${
						  `${dept} ${num}` || ''
            }
            Waitlist&body=Dear ${waitlist?.user?.firstName},
            %0D%0A%0D%0AThank you for your interest in my course. About your waitlist inquiry on Classy...`}
          >
            <B1>
              {waitlist?.user?.email?.substring(
							  0,
							  waitlist.user?.email?.length - 14,
              )}
            </B1>
          </Link>
        </TableCell>
        <TableCell align="left">{waitlist?.user?.netID}</TableCell>
        <TableCell align="left">{findReasoning()}</TableCell>
        <TableCell align="left">
          <Button
            type="button"
            style={{ background: getColor('prioritize', priority) }}
            onClick={prioritize}
          >
            {priority ? 'Unprioritize' : 'Prioritize'}
          </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <div className={styles.collapseContainer}>
              <TextLabel
                style={{ marginBottom: '10px', marginTop: '10px' }}
                color="var(--dark-grey)"
              >
                Reviews
              </TextLabel>
            </div>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default function CollapsibleTable(props) {
  const tableType = 'search';
  const {
    courseId, offering, dept, num, i,
  } = props;
  if (!offering.waitlist && !offering.priorityWaitlist) {
    return <div />;
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        {tableType === 'profInfo' ? (
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell align="left">
                <strong>Spot #</strong>
              </TableCell>
              <TableCell align="left">
                <strong>Student Name</strong>
              </TableCell>
              <TableCell align="left">
                <strong>Email</strong>
              </TableCell>
              <TableCell align="left">
                <strong>Student ID</strong>
              </TableCell>
              <TableCell align="left">
                <strong>Reasoning</strong>
              </TableCell>
            </TableRow>
          </TableHead>
        ) : (
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell align="left">
                <strong>Spot #</strong>
              </TableCell>
              <TableCell align="left">
                <strong>Student Name</strong>
              </TableCell>
              <TableCell align="left">
                <strong>Email (@dartmouth.edu)</strong>
              </TableCell>
              <TableCell align="left">
                <strong>Student ID</strong>
              </TableCell>
              <TableCell align="left">
                <strong>Reasoning</strong>
              </TableCell>
              <TableCell align="left">
                <strong>Prioritize</strong>
              </TableCell>
            </TableRow>
          </TableHead>
        )}
        <TableBody>
          {offering?.priorityWaitlist?.map((student) => (
            <Row
              key={student._id}
              waitlist={student}
              tableType={tableType}
              courseId={courseId}
              dept={dept}
              num={num}
              spot="PRIORITY"
              i={i}
            />
          ))}
          {offering?.waitlist?.map((student, index) => (
            <Row
              key={student._id}
              waitlist={student}
              tableType={tableType}
              courseId={courseId}
              dept={dept}
              num={num}
              spot={
                offering?.priorityWaitlist?.length
                  ? offering.priorityWaitlist.length + index + 1
                  : index + 1
            }
              i={i}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
