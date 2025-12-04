"use client";

interface ErrorHandlerProps {
  error: Error;
  reset: () => void;
}
function ErrorHandler({ error, reset }: ErrorHandlerProps) {
  console.log(error);
  return (
    <div>
      <h3>Ooops. Something went wrong</h3>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}

export default ErrorHandler;
