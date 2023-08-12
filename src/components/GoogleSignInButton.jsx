import GoogleButton from 'react-google-button';

function GoogleSignInButton({ onClick, isDisabled }) {
    return (
        <div className={`flex items-center justify-center ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
            <GoogleButton onClick={onClick} disabled={isDisabled} />
        </div>
    )
}

export default GoogleSignInButton