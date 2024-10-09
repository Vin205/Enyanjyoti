/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
	return (
		<section className="bg-white">
			<div className="container" style={{ display: "flex", justifyContent: "center", height: "100vh", alignItems: "center", width: "100%" }}>
				<div className="text-center">
					<div
						className="bg-image"
						style={{
							height: "400px",
							backgroundPosition: "center",
							backgroundImage:
								"url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)",
						}}>
					</div>
					<div className="mt-3">
						<h3 className="display-6 mb-1 fw-semibold">
							Looks like you're lost
						</h3>

						<p className="fw-semibold">
							The page you are looking for is not available!
						</p>

						<Link
							to="/"
							className="btn btn-success btn-lg my-4">
							Home
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Error;
