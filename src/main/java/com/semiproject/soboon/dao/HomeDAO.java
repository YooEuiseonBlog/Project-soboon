package com.semiproject.soboon.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.semiproject.soboon.vo.BoardVO;
import com.semiproject.soboon.vo.HomeVO;
import com.semiproject.soboon.vo.PagingVO;

@Mapper
@Repository
public interface HomeDAO {
	public List<HomeVO> selectList();
	
}
