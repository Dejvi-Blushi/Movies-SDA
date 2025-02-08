const Hashtag = (props) => {
  return (
    <>
      <span className='inline-block bg-[rgb(29,39,69)] rounded-full px-3 py-1 text-m font-semibold text-yellow-500 mr-2 mb-2'>
        {props.tag1}
      </span>
      <span className='inline-block bg-[rgb(29,39,69)] rounded-full px-3 py-1 text-m font-semibold text-yellow-500 mr-2 mb-2'>
        {props.tag2}
      </span>
      <span className='inline-block bg-[rgb(29,39,69)] rounded-full px-3 py-1 text-m font-semibold text-yellow-500 mr-2 mb-2'>
        {props.tag3}
      </span>
    </>
  );
};

export default Hashtag;
