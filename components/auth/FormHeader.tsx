interface FormHeaderProps {
  label?: string;
}

const FormHeader = ({ label }: FormHeaderProps) => {
  return (
    <div className='mx-auto w-full '>
      <h1 className='text-codeCraft-600 text-center text-2xl font-semibold'>
        {label}
      </h1>
    </div>
  );
};

export default FormHeader;
