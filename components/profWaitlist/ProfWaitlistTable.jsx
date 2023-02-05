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
import {
  B3, TextLabel,
} from '../ui/typography';
import styles from '../../styles/components/ProfWaitlistTable.module.css';

const WaitlistMockData = [
  {
    spot: '1',
    name: 'Vi Tran',
    class: '23',
    email: 'vi.n.tran.23@dartmouth.edu',
    id: 'ABC123',
    reasoning: 'senior who needs for major',
  },
  {
    spot: '2',
    name: 'Gyuri Hwang',
    class: '24',
    email: 'gyuri.hwang.24@dartmouth.edu',
    id: 'ADS824',
    reasoning: 'want to learn UI/UX',
  },
];

function Row(props) {
  const {
    waitlist, tableType,
  } = props;
  const [open, setOpen] = React.useState(false);
  console.log(tableType);
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
        ) : <TableCell />}
        <TableCell component="th" scope="row">
          {waitlist.spot}
        </TableCell>
        <TableCell align="left">{waitlist.name}</TableCell>
        <TableCell align="left">{waitlist.term ? waitlist.term : waitlist.class}</TableCell>
        <TableCell align="left">{waitlist.email}</TableCell>
        <TableCell align="left">{waitlist.id}</TableCell>
        <TableCell align="left">{waitlist.reasoning}</TableCell>

      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <div className={styles.collapseContainer}>
              <TextLabel style={{ marginBottom: '10px', marginTop: '10px' }} color="var(--dark-grey)">Reviews</TextLabel>
            </div>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default function CollapsibleTable(props) {
  const tableType = 'search';
  const waitlists = WaitlistMockData;
  if (waitlists === {}) {
    return <div />;
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        {tableType === 'profInfo'
          ? (
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell align="left"><strong>Spot #</strong></TableCell>
                <TableCell align="left"><strong>Student Name</strong></TableCell>
                <TableCell align="left"><strong>Class</strong></TableCell>
                <TableCell align="left"><strong>Email</strong></TableCell>
                <TableCell align="left"><strong>Student ID</strong></TableCell>
                <TableCell align="left"><strong>Reasoning</strong></TableCell>
              </TableRow>
            </TableHead>
          ) : (
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell align="left"><strong>Spot #</strong></TableCell>
                <TableCell align="left"><strong>Student Name</strong></TableCell>
                <TableCell align="left"><strong>Class</strong></TableCell>
                <TableCell align="left"><strong>Email</strong></TableCell>
                <TableCell align="left"><strong>Student ID</strong></TableCell>
                <TableCell align="left"><strong>Reasoning</strong></TableCell>
              </TableRow>
            </TableHead>
          )}
        <TableBody>
          {waitlists.map((waitlist) => (
            <Row key={waitlist.spot} waitlist={waitlist} tableType={tableType} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
