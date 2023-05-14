import React from "react";
import { tags } from "../data";
const SideNav = () => {
  return (
    <aside className="fixed hidden md:block top-0 w-36 lg:w-60 left-0 bg-myBlack mt-[80px] overflow-y-scroll h-full z-20">
      <div className="bg-myGray ml-2">
        <div className="mb-8">
          <p>Sort</p>
          <form>
            {/*  release-date, popularity, alphabetical or relevance */}

            <div>
              <input
                type="radio"
                id="relevance"
                name="sort"
                value="relevance"
              />
              <label for="relevance">Relevance</label>
            </div>
            <div>
              <input
                type="radio"
                id="release-date"
                name="sort"
                value="release-date"
              />
              <label for="release-date">Release Date</label>
            </div>
            <div>
              <input
                type="radio"
                id="popularity"
                name="sort"
                value="popularity"
              />
              <label for="popularity">Popularity</label>
            </div>
            <div>
              <input
                type="radio"
                id="alphabetical"
                name="sort"
                value="alphabetical"
              />
              <label for="alphabetical">Alphabetical</label>
            </div>
          </form>
        </div>

        <div>
          <p>Platform</p>
          <form>
            {/*  release-date, popularity, alphabetical or relevance */}
            <div>
              <input type="radio" id="all" name="platform" value="" />
              <label for="all">All</label>
            </div>
            <div>
              <input
                type="radio"
                id="browser"
                name="platform"
                value="browser"
              />
              <label for="browser">Browser</label>
            </div>
            <div>
              <input type="radio" id="pc" name="platform" value="pc" />
              <label for="pc">PC</label>
            </div>
          </form>
        </div>
      </div>
    </aside>
  );
};

export default SideNav;
