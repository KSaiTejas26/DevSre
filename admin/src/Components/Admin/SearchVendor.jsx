import React from 'react';
import { SegmentGroup, Segment } from 'semantic-ui-react';
import Search from "./Search1";
const SegmentExampleHorizontalSegments = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={{ width: '50%',height:'100%' }}>
      <SegmentGroup horizontal size='massive' style={{ width: '100%' }}>
        <Segment><Search/></Segment>
        <Segment><Search/></Segment>
        <Segment><Search/></Segment>
      </SegmentGroup>
    </div>
  </div>
);

export default SegmentExampleHorizontalSegments;