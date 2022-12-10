import React from "react";

const Login = () => {

    return(
        <section className="login-section">
		<div className="container">

			<div className="login-container">
				<div className="col-md-4">
					<form>
						<div className="input-group">
							<input type="text"
								name={"username"} 
								className="form-control p-3 border-radius-0 input-bg mb-1" 
								placeholder="Username" required />
						</div>
						<div className="input-group">
						<input type="password" 
							name={"password"} 
							className="form-control p-3 border-radius-0 input-bg mb-1"
							placeholder="Password" required />
						</div>
						<button type="submit"
						className="btn btn-success p-3 border-radius-0 mt-3 w-100">User Login</button>
				</form>
	        </div>
				</div>
			</div>
	</section>
    );
}

export default Login;