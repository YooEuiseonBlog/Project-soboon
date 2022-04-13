package com.semiproject.soboon.service;

import java.util.List;

import com.semiproject.soboon.vo.ChatVO;

public interface ChatService {
	public List<ChatVO> getLastMessage(String myNickname);
	public List<ChatVO> getAllMessage(String myUserid, String oppNickname);
}
